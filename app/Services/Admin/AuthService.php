<?php

namespace App\Services\Admin;

use App\Models\Admin;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class AuthService
{
    /**
     * Authenticate an admin.
     *
     * @param array<string, string> $credentials
     * @return \App\Models\Admin
     *
     * @throws \Symfony\Component\HttpKernel\Exception\BadRequestHttpException
     */
    public function authenticate(array $credentials)
    {
        $admin =  Admin::where('username', $credentials['usernameOrEmail'])
            ->orWhere('email', $credentials['usernameOrEmail'])
            ->first();

        $isCorrectPassword = is_null($admin)
            ? false
            : Hash::check($credentials['password'], $admin->password);

        if (!$isCorrectPassword) {
            throw new BadRequestHttpException('Username or password is incorrect.');
        }

        return $admin;
    }
}
