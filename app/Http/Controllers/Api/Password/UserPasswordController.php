<?php

namespace App\Http\Controllers\Api\Password;

use App\Http\Requests\Password\ForgotPasswordRequest;
use App\Http\Requests\Password\ResetPasswordRequest;

class UserPasswordController extends PasswordController
{
    /**
     * Send the reset password email to an user.
     *
     * @param \App\Http\Requests\Password\ForgotPasswordRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function forgotPassword(ForgotPasswordRequest $request)
    {
        return $this->forgot($request, 'users');
    }

    /**
     * Reset the user's password.
     *
     * @param \App\Http\Requests\Password\ResetPasswordRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function resetPassword(ResetPasswordRequest $request)
    {
        return $this->reset($request, 'users');
    }
}
