<?php

namespace App\Http\Controllers\Api\Account\Profile;

use App\Http\Controllers\Controller;
use App\Services\AssetService;
use App\Services\ProfileService;

abstract class ProfileController extends Controller
{
    protected ProfileService $profileService;

    protected AssetService $assetService;

    public function __construct(ProfileService $profileService, AssetService $assetService)
    {
        $this->profileService = $profileService;
        $this->assetService = $assetService;

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
                ...(\Illuminate\Database\Eloquent\Model::class)(auth()->user())->toArray(),
                'profile' => auth()->user()->profile,
            ],
        ]);
    }
}
