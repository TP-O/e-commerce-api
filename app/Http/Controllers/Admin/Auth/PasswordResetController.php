<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Common\Auth\ForgotPasswordRequest;
use App\Http\Requests\Common\Auth\ResetPasswordRequest;
use App\Services\Common\Auth\PasswordService;
use App\Services\Common\Auth\TokenService;
use Illuminate\Support\Facades\Password;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class PasswordResetController extends Controller
{
    private TokenService $tokenService;

    private PasswordService $passwordService;

    public function __construct(TokenService $tokenService, PasswordService $passwordService)
    {
        $this->tokenService = $tokenService;
        $this->passwordService = $passwordService;
    }

    /**
     * Send password reset email.
     *
     * @param \App\Http\Requests\Common\Auth\ForgotPasswordRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function forgotPassword(ForgotPasswordRequest $request)
    {
        $status = Password::broker('admins')->sendResetLink(
            $request->safe()->only('email'),
        );

        if ($status === Password::INVALID_USER) {
            throw new BadRequestHttpException('Email does not exist!');
        }
        else {
            throw new BadRequestHttpException('Please retry after a while!');
        }

        return response()->json([
            'status' => true,
            'message' => 'Password reset email was sent!',
        ]);
    }

    /**
     * Reset password.
     *
     * @param \App\Http\Requests\Common\Auth\ResetPasswordRequest $request
     * @return \Illuminate\Http\JsonResponse
     *
     * @throws \Symfony\Component\HttpKernel\Exception\HttpException
     */
    public function resetPassword(ResetPasswordRequest $request)
    {
        $status = Password::broker('admins')->reset(
            $request->safe()->only('email', 'token', 'password'),
            function ($admin, $password) {
                $this->passwordService->updatePassword($admin, $password);
                $this->tokenService->revokeAllPATs($admin);
            },
        );

        if ($status === Password::INVALID_TOKEN) {
            throw new BadRequestHttpException('Invalid token!');
        }
        else {
            throw new BadRequestHttpException('Unable to reset password!');
        }

        return response()->json([
            'status' => true,
            'status' => 'The password has been reset!',
        ]);
    }
}
