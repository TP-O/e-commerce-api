<?php

namespace App\Http\Controllers\Api\Account\Profile;

use App\Http\Controllers\Controller;
use App\Services\AssetService;
use App\Services\ProfileService;
use Illuminate\Support\Arr;

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
                ...Arr::except(
                    (\Illuminate\Database\Eloquent\Model::class)(auth()->user())->toArray(),
                    'id'
                ),
                'profile' => Arr::except(auth()->user()->profile, 'user_id'),
            ],
        ]);
    }
}
