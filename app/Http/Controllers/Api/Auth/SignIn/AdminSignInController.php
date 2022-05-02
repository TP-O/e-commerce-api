<?php

namespace App\Http\Controllers\Api\Auth\SignIn;

use App\Http\Requests\Auth\SignInRequest;
use Illuminate\Http\Response;

class AdminSignInController extends SignInController
{
    /**
     * Sign in to the system as an admin.
     *
     * @param \App\Http\Requests\Auth\SignInRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function signIn(SignInRequest $request)
    {
        $admin = $this->authService->authenticateAdmin($request->validated());
        $token = $admin->createToken('')->plainTextToken;;

        return response()->json([
            'status' => true,
            'data' => $admin,
            'token' => $token,
        ], Response::HTTP_CREATED);
    }
}
