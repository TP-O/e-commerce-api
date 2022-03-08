<?php

namespace App\Http\Controllers\Api\Account\Profile;

use App\Http\Controllers\Controller;
use App\Services\AssetService;
use App\Services\PasswordService;
use App\Services\ProfileService;
use App\Services\TokenService;
use Illuminate\Support\Arr;

abstract class ProfileController extends Controller
{
    protected ProfileService $profileService;

    protected AssetService $assetService;

    public function __construct(
        ProfileService $profileService,
        AssetService $assetService,
        PasswordService $passwordService,
        TokenService $tokenService)
    {
        $this->profileService = $profileService;
        $this->assetService = $assetService;
        $this->passwordService = $passwordService;
        $this->tokenService = $tokenService;

        $this->middleware('auth:sanctum');
    }

    /**
     * Show the user's profile.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json([
            'data' => [
                ...Arr::except(auth()->user()->toArray(), 'id'),
                'profile' => Arr::except(auth()->user()->profile, 'user_id'),
            ],
        ]);
    }
}
