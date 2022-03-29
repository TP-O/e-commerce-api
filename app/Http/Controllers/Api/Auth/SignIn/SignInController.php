<?php

namespace App\Http\Controllers\Api\Auth\SignIn;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\SignInRequest;
use App\Services\AuthService;
use App\Services\TokenService;

abstract class SignInController extends Controller
{
    protected AuthService $authService;

    protected TokenService $tokenService;

    public function __construct(AuthService $authService, TokenService $tokenService)
    {
        $this->authService = $authService;
        $this->tokenService = $tokenService;

        $this->middleware('guest:sanctum')->only('signIn');
        $this->middleware('auth:sanctum')->only('signOut');
    }

    /**
     * Sign out of the system.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function signOut()
    {
        $this->tokenService->revokePAT(auth()->user());

        return response()->json([
            'status' => true,
            'message' => 'Signed out of the system!',
        ]);
    }

    /**
     * Sign in to the system.
     *
     * @param  \App\Http\Requests\Auth\SignInRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    abstract public function signIn(SignInRequest $request);
}
