<?php

namespace App\Services\Common\Auth;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Symfony\Component\HttpKernel\Exception\HttpException;

class TokenService
{
    /**
     * Create a personal access token.
     *
     * @param \Illuminate\Foundation\Auth\User $user
     * @return string
     */
    public function createPAT(Authenticatable $user)
    {
        return $user->createToken('default')->plainTextToken;
    }

    /**
     * Revoke user's current personal access token.
     *
     * @param \Illuminate\Foundation\Auth\User $user
     * @return bool
     *
     * @throws \Symfony\Component\HttpKernel\Exception\HttpException
     */
    public function revokePAT(Authenticatable $user)
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
    public function revokeAllPATs(Authenticatable $user)
    {
        return $user->tokens()->delete();
    }
}
