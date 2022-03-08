<?php

namespace App\Http\Controllers\Api\Auth\SignIn;

use App\Http\Requests\SignInRequest;
use Illuminate\Http\Response;

class AdminSignInController extends SignInController
{
    /**
     * Sign in to the system as an admin.
     *
     * @param  \App\Http\Requests\SignInRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function signIn(SignInRequest $request) {
        $signInInput = $request->validated();

        $admin = $this->authService->authenticateAdmin($signInInput);
        $token = $this->tokenService->createPAT($admin, true);

        return response()->json([
            'status' => true,
            'data' => $admin,
            'token' => $token,
        ], Response::HTTP_CREATED);
    }
}
