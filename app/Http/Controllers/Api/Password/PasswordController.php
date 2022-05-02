<?php

namespace App\Http\Controllers\Api\Password;

use App\Http\Controllers\Controller;
use App\Http\Requests\Password\ForgotPasswordRequest;
use App\Http\Requests\Password\ResetPasswordRequest;
use App\Http\Requests\Password\UpdatePasswordRequest;
use Illuminate\Auth\Notifications\ResetPassword as ResetPasswordNotification;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

abstract class PasswordController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum')->only('updatePassword');
    }

    /**
     * Update the user's password.
     *
     * @param \App\Http\Requests\Password\UpdatePasswordRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdatePasswordRequest $request)
    {
        $updatePasswordInput = $request->validated();

        if (!Hash::check($updatePasswordInput['password'], auth()->user()->password)) {
            throw new BadRequestHttpException('Invalid password!');
        }

        $request->user()->update([
            'password' => Hash::make($updatePasswordInput['new_password'], ['rounds' => 10]),
        ]);

        $request->user()->tokens()->delete();

        $token = $request->user()->createToken('')->plainTextToken;

        return response()->json([
            'status' => true,
            'message' => 'Your password has been updated!',
            'token' => $token,
        ]);
    }

    /**
     * Set reset password url.
     *
     * @return void
     */
    protected function setResetUrl()
    {
        ResetPasswordNotification::createUrlUsing(function ($notifiable, $token) {
            return url(route('password.reset', [
                'token' => $token,
                'email' => $notifiable->getEmailForPasswordReset(),
            ], false));
        });
    }

    /**
     * Send the reset password email.
     *
     * @param \App\Http\Requests\Password\ForgotPasswordRequest $request
     * @param string $broker
     * @return \Illuminate\Http\JsonResponse
     *
     * @throws \Symfony\Component\HttpKernel\Exception\BadRequestHttpException
     */
    protected function forgotPassword(ForgotPasswordRequest $request, string $broker)
    {
        $this->setResetUrl();

        $status = Password::broker($broker)->sendResetLink(
            $request->safe()->only('email'),
        );

        if ($status === Password::INVALID_USER) {
            throw new BadRequestHttpException('Email does not exist!');
        } else if ($status !== Password::RESET_LINK_SENT) {
            throw new BadRequestHttpException('Please retry after a while!');
        }

        return response()->json([
            'status' => true,
            'message' => 'Password reset email was sent!',
        ]);
    }

    /**
     * Reset the password.
     *
     * @param \App\Http\Requests\Password\ResetPasswordRequest $request
     * @param string $broker
     * @return \Illuminate\Http\JsonResponse
     *
     * @throws \Symfony\Component\HttpKernel\Exception\BadRequestHttpException
     */
    protected function resetPassword(ResetPasswordRequest $request, string $broker)
    {
        $status = Password::broker($broker)->reset(
            $request->safe()->only('email', 'token', 'password'),
            function ($user, $password) {
                $user()->update([
                    'password' => Hash::make($password, ['rounds' => 10]),
                ]);

                $user->tokens()->delete();
            },
        );

        if ($status !== Password::PASSWORD_RESET) {
            throw new BadRequestHttpException('Unable to reset password!');
        }

        return response()->json([
            'status' => true,
            'status' => 'The password has been reset!',
        ]);
    }

    /**
     * Send the reset password email with the specific broker.
     *
     * @param \App\Http\Requests\Password\ForgotPasswordRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    abstract public function forgot(ForgotPasswordRequest $request);

    /**
     * Reset the password with the specific broker.
     *
     * @param \App\Http\Requests\Password\ResetPasswordRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    abstract public function reset(ResetPasswordRequest $request);
}
