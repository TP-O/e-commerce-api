<?php

namespace App\Http\Controllers\Api\Password;

use App\Http\Requests\ForgotPasswordRequest;
use App\Http\Requests\ResetPasswordRequest;
use Illuminate\Auth\Notifications\ResetPassword as ResetPasswordNotification;

class AdminPasswordController extends PasswordController
{
    /**
     * Set reset password url.
     *
     * @return void
     */
    protected function setResetUrl()
    {
        ResetPasswordNotification::createUrlUsing(function ($notifiable, $token) {
            return url(route('admin.password.reset', [
                'token' => $token,
                'email' => $notifiable->getEmailForPasswordReset(),
            ], false));
        });
    }

    /**
     * Send the reset password email to an admin.
     *
     * @param \App\Http\Requests\ForgotPasswordRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function forgotPassword(ForgotPasswordRequest $request)
    {
        return $this->forgot($request, 'admins');
    }

    /**
     * Reset the admin's password.
     *
     * @param \App\Http\Requests\ResetPasswordRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function resetPassword(ResetPasswordRequest $request)
    {
        return $this->reset($request, 'admins');
    }
}
