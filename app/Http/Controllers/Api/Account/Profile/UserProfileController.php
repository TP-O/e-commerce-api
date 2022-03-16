<?php

namespace App\Http\Controllers\Api\Account\Profile;

use App\Http\Requests\UpdateUserProfileRequest;
use Illuminate\Support\Arr;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class UserProfileController extends ProfileController
{
    /**
     * Update the user's profile.
     *
     * @param \App\Http\Requests\UpdateUserProfileRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateProfile(UpdateUserProfileRequest $request)
    {
        $updateProfileInput = $request->validated();

        if (empty($updateProfileInput)) {
            throw new BadRequestHttpException('Nothing to update!');
        }

        if (Arr::exists($updateProfileInput, 'avatar')) {
            $updateProfileInput['avatar_image'] = $this->assetService
                ->storeAvatar($request->file('avatar'));
        }

        $this->profileService->updateUserProfile(
            auth()->user()->id,
            $updateProfileInput,
        );

        return response()->json([
            'status' => true,
            'message' => 'Profile has been updated!',
        ]);
    }
}
