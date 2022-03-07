<?php

namespace App\Http\Controllers\User\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Common\Auth\SignInRequest;
use App\Http\Requests\Common\Auth\SignUpRequest;
use App\Services\Common\Auth\TokenService;
use App\Services\User\AuthService;
use App\Services\User\ProfileService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AuthController extends Controller
{
    private AuthService $authService;

    private TokenService $tokenService;

    private ProfileService $profileService;

    public function __construct(
        AuthService $authService,
        TokenService $tokenService,
        ProfileService $profileService)
    {
        $this->authService = $authService;
        $this->tokenService = $tokenService;
        $this->profileService = $profileService;

        $this->middleware('auth:sanctum')->only(['signOut']);
    }

    /**
     * Create an user account.
     *
     * @param  \App\Http\Requests\Common\Auth\SignUpRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function signUp(SignUpRequest $request)
    {
        $signUpInput = $request->validated();

        $user = $this->authService->createUser($signUpInput);
        $token = $this->tokenService->createPAT($user);

        $this->profileService->createProfile($user->id, [
            'username' => $user->username,
        ]);

        return response()->json([
            'status' => true,
            'data' => $user,
            'token' => $token,
        ], Response::HTTP_CREATED);
    }

    /**
     * Sign in to system.
     *
     * @param  \App\Http\Requests\Common\Auth\SignInRequest  $request
     * @return \Illuminate\Http\JsonResponse
     *
     * @throws \Symfony\Component\HttpKernel\Exception\HttpException
     */
    public function signIn(SignInRequest $request)
    {
        $signInInput = $request->validated();

        $user = $this->authService->authenticate($signInInput);
        $token = $this->tokenService->createPAT($user);

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
        $this->tokenService->revokePAT($request->user());

        return response()->json([
            'status' => true,
            'message' => 'Signed out of the system!',
        ]);
    }
}
