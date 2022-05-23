<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\SignInRequest;
use App\Services\AuthService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SignInController extends Controller
{
    private AuthService $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;

        $this->middleware('guest:sanctum')->only('signIn');
        $this->middleware('auth:sanctum')->only('signOut');
    }

    /**
     * Sign in to system as user.
     *
     * @param  \App\Http\Requests\Auth\SignInRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function signInAsUser(SignInRequest $request)
    {
        $user = $this->authService->authenticateUser($request->validated());
        $token = $user->createToken('')->plainTextToken;

        return response()->json([
            'status' => true,
            'data' => $user,
            'token' => $token,
        ], Response::HTTP_CREATED);
    }

    /**
     * Sign in to the system as admin.
     *
     * @param \App\Http\Requests\Auth\SignInRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function signInAsAdmin(SignInRequest $request)
    {
        $admin = $this->authService->authenticateAdmin($request->validated());
        $token = $admin->createToken('')->plainTextToken;;

        return response()->json([
            'status' => true,
            'data' => $admin,
            'token' => $token,
        ], Response::HTTP_CREATED);
    }

    /**
     * Sign out of the system.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function signOut(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'status' => true,
            'message' => 'Signed out of the system!',
        ]);
    }
}
