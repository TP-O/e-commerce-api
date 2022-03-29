<?php

namespace App\Services;

use App\Models\Admin\Admin;
use App\Models\User\User;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class AuthService
{
    /**
     * Create an user.
     *
     * @param array $input
     * @return \App\Models\User\User
     */
    public function createUser($input)
    {
        $input['password'] = Hash::make($input['password'], ['rounds' => 10]);

        $user = new User($input);

        $user->save();

        return $user;
    }

    /**
     * Create an OAuth user.
     *
     * @param string $email
     * @return \App\Models\User\User
     */
    public function createOAuthUser($email)
    {
        $username = substr(md5($email), 0, 10);

        $user = new User([
            'username' => $username,
            'email' => $email,
        ]);

        // Save user with verified email
        $user->markEmailAsVerified();

        return  $user;
    }

    /**
     * Get the user if exist.
     *
     * @param string $email
     * @return \App\Models\User\User|null
     */
    public function existEmail($email)
    {
        return User::where('email', $email)->first();
    }

    /**
     * Validate the user's password.
     *
     * @param \App\Models\User\User|\App\Models\Admin\Admin|null $user
     * @param string $password
     * @return void
     *
     * @throws \Symfony\Component\HttpKernel\Exception\BadRequestHttpException
     */
    private function validatePassword($user, $password)
    {
        $isCorrectPassword = is_null($user)
            ? false
            : Hash::check($password, $user->password);

        if (!$isCorrectPassword) {
            throw new BadRequestHttpException('Username or password is incorrect.');
        }
    }

    /**
     * Authenticate the user.
     *
     * @param array $credentials
     * @return \App\Models\User\User
     */
    public function authenticateUser($credentials)
    {
        $user = User::where('username', $credentials['usernameOrEmail'])
            ->orWhere('email', $credentials['usernameOrEmail'])
            ->first();

        $this->validatePassword($user, $credentials['password']);

        return $user;
    }

    /**
     * Authenticate the admin.
     *
     * @param array $credentials
     * @return \App\Models\Admin\Admin
     */
    public function authenticateAdmin($credentials)
    {
        $admin =  Admin::where('username', $credentials['usernameOrEmail'])
            ->orWhere('email', $credentials['usernameOrEmail'])
            ->first();

        $this->validatePassword($admin, $credentials['password']);

        return $admin;
    }
}
