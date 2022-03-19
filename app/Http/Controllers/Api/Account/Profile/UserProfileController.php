<?php

namespace App\Http\Controllers\Api\Account\Profile;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateUserProfileRequest;
use App\Models\User\Profile;
use App\Services\AssetService;
use Illuminate\Support\Arr;

class UserProfileController extends Controller
{
    private AssetService $assetService;

    public function __construct(AssetService $assetService) {
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
                ...auth()->user()->toArray(),
                'profile' => auth()->user()->profile,
            ],
        ]);
    }

    /**
     * Update the user's profile.
     *
     * @param \App\Http\Requests\UpdateUserProfileRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateProfile(UpdateUserProfileRequest $request)
    {
        $updateProfileInput = $request->validated();

        if (Arr::exists($updateProfileInput, 'avatar')) {
            $updateProfileInput['avatar_image'] = $this->assetService
                ->storeAvatar($request->file('avatar'));
        }

        Profile::where('user_id', auth()->user()->id)
            ->update($updateProfileInput);

        return response()->json([
            'status' => true,
            'message' => 'Profile has been updated!',
        ]);
    }
}
