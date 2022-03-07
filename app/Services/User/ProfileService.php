<?php

namespace App\Services\User;

use App\Models\User;
use App\Models\User\Profile;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpKernel\Exception\HttpException;

class ProfileService
{
    /**
     * Create an user's default profile.
     *
     * @param int $userId
     * @param array<string, any> $infor
     * @return \App\Models\User\Profile
     */
    public function createProfile(int $userId, array $infor)
    {
        $profile = new Profile([
            'user_id' => $userId,
            'display_name' => $infor['display_name'] ?? '',
            'avatar_image' => $infor['avatar_image'] ?? 'public/avatars/default-avatar.jpg',
        ]);

        $profile->save();

        return $profile;
    }

    /**
     * Update user's password.
     *
     * @param \App\Models\User $user
     * @param string $newPassword
     *
     * @throws \Symfony\Component\HttpKernel\Exception\HttpException
     */
    public function updatePassword(User $user, string $newPassword)
    {
        $hasedPassword = Hash::make($newPassword, ['rounds' => 10]);

        $user->password = $hasedPassword;

        if (!$user->save()) {
            throw new HttpException(Response::HTTP_INTERNAL_SERVER_ERROR, 'Unable to update password!');
        }

        return true;
    }

    /**
     * Update user's profile.
     *
     * @param int $userId
     * @param array<string, any> $newProfile
     * @return
     */
    public function updateProfile($userId, $newProfile)
    {
        return Profile::where('user_id', $userId)
            ->update(Arr::except($newProfile, 'avatar'));
    }
}
