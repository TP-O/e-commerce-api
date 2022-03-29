<?php

namespace App\Services;

use Illuminate\Foundation\Auth\User;
use Illuminate\Support\Facades\Hash;

class PasswordService
{
    /**
     * Update the password.
     *
     * @param \Illuminate\Foundation\Auth\User $user
     * @param string $password
     * @return bool
     *
     * @throws \Symfony\Component\HttpKernel\Exception\HttpException
     */
    public function update(User $user, $password)
    {
        $user->forceFill([
            'password' => Hash::make($password, ['rounds' => 10]),
        ]);

        return $user->save();
    }
}
