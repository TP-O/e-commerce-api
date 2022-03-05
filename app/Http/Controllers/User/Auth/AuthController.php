<?php

namespace App\Http\Controllers\User\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\Auth\SignInRequest;
use App\Http\Requests\User\Auth\SignUpRequest;
use App\Services\AuthService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AuthController extends Controller
{
    private AuthService $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;

        $this->middleware('auth:sanctum')->only(['signOut']);
    }

    /**
     * Create an user account.
     *
     * @param  \App\Http\Requests\User\Auth\SignUpRequest  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function signUp(SignUpRequest $request)
    {
        $signUpInput = $request->validated();

        $user = $this->authService->createUser($signUpInput);
        $token = $this->authService->createPAT($user);

        return response()->json([
            'status' => true,
            'data' => $user,
            'token' => $token,
        ], Response::HTTP_CREATED);
    }

    /**
     * Sign in to system.
     *
     * @param  \App\Http\Requests\User\Auth\SignInRequest  $request
     * @return \Illuminate\Http\JsonResponse
     *
     * @throws \Symfony\Component\HttpKernel\Exception\HttpException
     */
    public function signIn(SignInRequest $request)
    {
        $signInInput = $request->validated();

        $user = $this->authService->authenticate($signInInput);
        $token = $this->authService->createPAT($user);

        return response()->json([
            'status' => true,
            'data' => $user,
            'token' => $token,
        ], Response::HTTP_CREATED);
    }

    /**
     * Sign out of system.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function signOut(Request $request)
    {
        $this->authService->revokePAT($request->user());

        return response()->json([
            'status' => true,
            'message' => 'Signed out of the system!',
        ]);
    }
}
