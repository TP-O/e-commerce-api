<?php

namespace App\Http\Controllers\Api\Auth\SignIn;

use App\Http\Requests\Auth\SignInRequest;
use Illuminate\Http\Response;

class UserSignInController extends SignInController
{
    /**
     * Sign in to system as an user.
     *
     * @param  \App\Http\Requests\Auth\SignInRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function signIn(SignInRequest $request)
    {
        $user = $this->authService->authenticateUser($request->validated());
        $token = $user->createToken('')->plainTextToken;

        return response()->json([
            'status' => true,
            'data' => $user,
            'token' => $token,
        ], Response::HTTP_CREATED);
    }
}
