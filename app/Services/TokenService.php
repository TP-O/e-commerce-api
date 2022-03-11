<?php

namespace App\Services;

use Illuminate\Foundation\Auth\User;
use Symfony\Component\HttpKernel\Exception\HttpException;

class TokenService
{
    /**
     * Create the personal access token.
     *
     * @param \Illuminate\Foundation\Auth\User $user
     * @param bool $isAdmin
     * @return string
     */
    public function createPAT(User $user, $isAdmin = false)
    {
        return $user->createToken($isAdmin ? 'admin' : 'user')->plainTextToken;
    }

    /**
     * Revoke the user's current personal access token.
     *
     * @param \Illuminate\Foundation\Auth\User $user
     * @return bool
     *
     * @throws \Symfony\Component\HttpKernel\Exception\HttpException
     */
    public function revokePAT(User $user)
    {
        if (!$user->currentAccessToken()->delete()) {
            throw new HttpException(500, 'Unable to revoke token');
        }

        return true;
    }

    /**
     * Revoke all user's personal access tokens.
     *
     * @param \Illuminate\Foundation\Auth\User $user
     * @return int
     */
    public function revokeAllPATs(User $user)
    {
        return $user->tokens()->delete();
    }
}
