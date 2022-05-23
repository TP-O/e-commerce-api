<?php

namespace App\Http\Controllers\Api\Password;

use App\Http\Controllers\Controller;
use App\Http\Requests\Password\ForgotPasswordRequest;
use App\Http\Requests\Password\ResetPasswordRequest;
use App\Http\Requests\Password\UpdatePasswordRequest;
use App\Models\Account\User\User;
use Illuminate\Auth\Notifications\ResetPassword as ResetPasswordNotification;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class PasswordController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum')->only('update');
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
     * Set user reset password url.
     *
     * @return void
     */
    private function setUserResetUrl()
    {
        ResetPasswordNotification::createUrlUsing(function ($notifiable, $token) {
            return url(route('user.password.reset', [
                'token' => $token,
                'email' => $notifiable->getEmailForPasswordReset(),
            ], false));
        });
    }

    /**
     * Set admin reset password url.
     *
     * @return void
     */
    private function setAdminResetUrl()
    {
        ResetPasswordNotification::createUrlUsing(function ($notifiable, $token) {
            return url(route('admin.password.reset', [
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
                $user->update([
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
     * Send the reset password email to an user.
     *
     * @param \App\Http\Requests\Password\ForgotPasswordRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function forgotUserPassword(ForgotPasswordRequest $request)
    {
        $this->setUserResetUrl();

        $user = User::where('email', $request->safe()->only('email'))->first();

        if (is_null($user?->email_verified_at)) {
            throw new BadRequestHttpException('Email has not been verified!');
        }

        return $this->forgotPassword($request, 'users');
    }

    /**
     * Reset the user's password.
     *
     * @param \App\Http\Requests\Password\ResetPasswordRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function resetUserPassword(ResetPasswordRequest $request)
    {
        return $this->resetPassword($request, 'users');
    }

    /**
     * Send the reset password email to an admin.
     *
     * @param \App\Http\Requests\Password\ForgotPasswordRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function forgotAdminPassword(ForgotPasswordRequest $request)
    {
        $this->setAdminResetUrl();

        return $this->forgotPassword($request, 'admins');
    }

    /**
     * Reset the admin's password.
     *
     * @param \App\Http\Requests\Password\ResetPasswordRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function resetAdminPassword(ResetPasswordRequest $request)
    {
        return $this->resetPassword($request, 'admins');
    }
}
