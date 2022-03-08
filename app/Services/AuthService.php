<?php

namespace App\Services;

use App\Models\Admin;
use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpKernel\Exception\HttpException;

class AuthService
{
    /**
     * Create the user.
     *
     * @param array<string, string> $input
     * @return \App\Models\User
     *
     * @throws \Symfony\Component\HttpKernel\Exception\HttpException
     */
    public function createUser(array $input)
    {
        $input['password'] = Hash::make($input['password'], ['rounds' => 10]);

        $user = new User($input);

        if (!$user->save()) {
            throw new HttpException(Response::HTTP_INTERNAL_SERVER_ERROR, 'Unable to create account');
        }

        return $user;
    }

    /**
     * Create the OAuth user.
     *
     * @param string $email
     * @return \App\Models\User
     *
     * @throws \Symfony\Component\HttpKernel\Exception\HttpException
     */
    public function createOAuthUser(string $email)
    {
        $username = substr(md5($email), 0, 10);

        $user = new User([
            'username' => $username,
            'email' => $email,
        ]);

        // Save user with verified email
        if (!$user->markEmailAsVerified()) {
            throw new HttpException(500, 'Unable to create account');
        }

        return  $user;
    }

    /**
     * Get the user if exist.
     *
     * @param string $email
     * @return \App\Models\User|null
     */
    public function existEmail(string $email)
    {
        return User::where('email', $email)->first();
    }

    /**
     * Validate the user's password.
     *
     * @param \App\Models\User|\App\Models\Admin|null $user
     * @param string $password
     * @return void
     *
     * @throws \Symfony\Component\HttpKernel\Exception\BadRequestHttpException
     */
    private function validatePassword($user, string $password)
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
     * @param array<string, string> $credentials
     * @return \App\Models\User
     */
    public function authenticateUser(array $credentials)
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
     * @param array<string, string> $credentials
     * @return \App\Models\Admin
     */
    public function authenticateAdmin(array $credentials)
    {
        $admin =  Admin::where('username', $credentials['usernameOrEmail'])
            ->orWhere('email', $credentials['usernameOrEmail'])
            ->first();

        $this->validatePassword($admin, $credentials['password']);

        return $admin;
    }
}
