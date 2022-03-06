<?php

namespace App\Services\User;

use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpKernel\Exception\HttpException;

class AuthService
{
    /**
     * Create an user.
     *
     * @param array<string, string> $input
     * @return \App\Models\User
     *
     * @throws \Symfony\Component\HttpKernel\Exception\HttpException
     */
    public function createUser($input)
    {
        $input['password'] = Hash::make($input['password'], ['rounds' => 10]);

        $user = new User($input);

        if (!$user->save()) {
            throw new HttpException(Response::HTTP_INTERNAL_SERVER_ERROR, 'Unable to create account');
        }

        return $user;
    }

    /**
     * Create an oauth user.
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
     * Get user if exist.
     *
     * @param string $email
     * @return \App\Models\User|null
     */
    public function existEmail(string $email)
    {
        return User::where('email', $email)->first();
    }

    /**
     * Authenticate an user.
     *
     * @param array<string, string> $credentials
     * @return \App\Models\User
     *
     * @throws \Symfony\Component\HttpKernel\Exception\BadRequestHttpException
     */
    public function authenticate(array $credentials)
    {
        $user = User::where('username', $credentials['usernameOrEmail'])
            ->orWhere('email', $credentials['usernameOrEmail'])
            ->first();

        $isCorrectPassword = is_null($user)
            ? false
            : Hash::check($credentials['password'], $user->password);

        if (!$isCorrectPassword) {
            throw new BadRequestHttpException('Username or password is incorrect.');
        }

        return $user;
    }
}
