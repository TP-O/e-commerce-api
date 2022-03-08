<?php

namespace App\Services;

use Illuminate\Foundation\Auth\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpKernel\Exception\HttpException;

class PasswordService
{
    /**
     * Update the password.
     *
     * @param \Illuminate\Foundation\Auth\User $user
     * @param string $password
     * @return true
     *
     * @throws \Symfony\Component\HttpKernel\Exception\HttpException
     */
    public function updatePassword(User $user, string $password)
    {
        $user->forceFill([
            'password' => Hash::make($password, ['rounds' => 10]),
        ]);

        if (!$user->save()) {
            throw new HttpException(Response::HTTP_INTERNAL_SERVER_ERROR, 'Unable to update password');
        }

        return true;
    }
}
