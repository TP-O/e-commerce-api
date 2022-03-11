<?php

namespace App\Http\Controllers\Api\Password;

use App\Http\Controllers\Controller;
use App\Http\Requests\ForgotPasswordRequest;
use App\Http\Requests\ResetPasswordRequest;
use App\Http\Requests\UpdatePasswordRequest;
use App\Services\PasswordService;
use App\Services\TokenService;
use Illuminate\Auth\Notifications\ResetPassword as ResetPasswordNotification;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

abstract class PasswordController extends Controller
{
    private TokenService $tokenService;

    private PasswordService $passwordService;

    public function __construct(TokenService $tokenService, PasswordService $passwordService)
    {
        $this->tokenService = $tokenService;
        $this->passwordService = $passwordService;

        $this->middleware('auth:sanctum')->only('updatePassword');
    }

    /**
     * Update the user's password.
     *
     * @param \App\Http\Requests\UpdatePasswordRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updatePassword(UpdatePasswordRequest $request)
    {
        $updatePasswordInput = $request->validated();

        if (!Hash::check($updatePasswordInput['password'], auth()->user()->password)) {
            throw new BadRequestHttpException('Invalid password!');
        }

        $this->passwordService->updatePassword(
            $request->user(),
            $updatePasswordInput['new_password'],
        );

        $this->tokenService->revokeAllPATs($request->user());

        $token = $this->tokenService->createPAT($request->user());

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
     * @param \App\Http\Requests\ForgotPasswordRequest $request
     * @param string $broker
     * @return \Illuminate\Http\JsonResponse
     *
     * @throws \Symfony\Component\HttpKernel\Exception\BadRequestHttpException
     */
    protected function forgot(ForgotPasswordRequest $request, string $broker)
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
     * @param \App\Http\Requests\ResetPasswordRequest $request
     * @param string $broker
     * @return \Illuminate\Http\JsonResponse
     *
     * @throws \Symfony\Component\HttpKernel\Exception\BadRequestHttpException
     */
    protected function reset(ResetPasswordRequest $request, string $broker)
    {
        $status = Password::broker($broker)->reset(
            $request->safe()->only('email', 'token', 'password'),
            function ($user, $password) {
                $this->passwordService->updatePassword($user, $password);
                $this->tokenService->revokeAllPATs($user);
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
     * @param \App\Http\Requests\ForgotPasswordRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    abstract public function forgotPassword(ForgotPasswordRequest $request);

    /**
     * Reset the password with the specific broker.
     *
     * @param \App\Http\Requests\ResetPasswordRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    abstract public function resetPassword(ResetPasswordRequest $request);
}
