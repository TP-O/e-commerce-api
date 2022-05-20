<?php

namespace App\Http\Controllers\Api\Password;

use App\Http\Requests\Password\ForgotPasswordRequest;
use App\Http\Requests\Password\ResetPasswordRequest;
use App\Models\Account\User\User;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class UserPasswordController extends PasswordController
{
    /**
     * Send the reset password email to an user.
     *
     * @param \App\Http\Requests\Password\ForgotPasswordRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function forgot(ForgotPasswordRequest $request)
    {
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
    public function reset(ResetPasswordRequest $request)
    {
        return $this->resetPassword($request, 'users');
    }
}
