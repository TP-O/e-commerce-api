<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Common\Auth\SignInRequest;
use App\Services\Admin\AuthService;
use App\Services\Common\Auth\TokenService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AuthController extends Controller
{
    private AuthService $authService;

    private TokenService $tokenService;

    public function __construct(AuthService $authService, TokenService $tokenService)
    {
        $this->authService = $authService;
        $this->tokenService = $tokenService;

        $this->middleware('auth:sanctum')->only(['signOut']);
    }

    /**
     * Sign in to system.
     *
     * @param  \App\Http\Requests\Common\Auth\SignInRequest  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function signIn(SignInRequest $request) {
        $signInInput = $request->validated();

        $admin = $this->authService->authenticate($signInInput, true);
        $token = $this->tokenService->createPAT($admin);

        return response()->json([
            'status' => true,
            'data' => $admin,
            'token' => $token,
        ], Response::HTTP_CREATED);
    }

    /**
     * Sign out of system.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function signOut(Request $request) {
        $this->tokenService->revokePAT($request->user());

        return response()->json([
            'status' => true,
            'message' => 'Signed out of the system!',
        ]);
    }
}
