<?php

namespace App\Services\Common\Auth;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Hash;

class PasswordService {
    /**
     * Update new password.
     *
     * @param \Illuminate\Foundation\Auth\User $user
     * @param string $password
     * @return void
     */
    public function updatePassword(Authenticatable $user, string $password)
    {
        $user->forceFill([
            'password' => Hash::make($password),
        ]);

        $user->save();
    }
}
