<?php

namespace App\Http\Controllers\User\Account;

use App\Http\Controllers\Controller;
use App\Http\Requests\Common\Account\UpdatePasswordRequest;
use App\Http\Requests\User\Account\UpdateProfileRequest;
use App\Services\Common\AssetService;
use App\Services\User\ProfileService;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class ProfileController extends Controller
{
    private ProfileService $profileService;

    private AssetService $assetService;

    public function __construct(ProfileService $profileService, AssetService $assetService)
    {
        $this->profileService = $profileService;
        $this->assetService = $assetService;

        $this->middleware('auth:sanctum');
    }

    /**
     * Show user's profile.
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

    /**
     * Update user's password.
     *
     * @param \App\Http\Requests\Common\Account\UpdatePasswordRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updatePassword(UpdatePasswordRequest $request)
    {
        $updatePasswordInput = $request->validated();

        if (!Hash::check($updatePasswordInput['password'], auth()->user()->password)) {
            throw new BadRequestHttpException('Invalid password!');
        }

        $this->profileService->updatePassword(
            $request->user(),
            $updatePasswordInput['new_password'],
        );

        $this->authService->revokeAllPATs($request->user());

        $token = $this->authService->createPAT($request->user());

        return response()->json([
            'status' => true,
            'message' => 'Your password has been updated!',
            'token' => $token,
        ]);
    }

    /**
     * Update user's profile.
     *
     * @param \App\Http\Requests\User\Account\UpdateProfileRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateProfile(UpdateProfileRequest $request)
    {
        $updateProfileInput = $request->validated();

        if (empty($updateProfileInput)) {
            throw new BadRequestHttpException('Nothing to update!');
        }

        if (Arr::exists($updateProfileInput, 'avatar')) {
            $updateProfileInput['avatar_image'] = $this->assetService
                ->storeAvatar($request->file('avatar'));
        }

        $this->profileService->updateProfile(
            auth()->user()->id,
            Arr::except($updateProfileInput, 'avatar'),
        );

        return response()->json([
            'status' => true,
            'message' => 'Your profile has been updated!',
        ]);
    }
}
