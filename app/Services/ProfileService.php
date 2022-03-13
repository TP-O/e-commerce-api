<?php

namespace App\Services;

use App\Models\User\Profile;
use Illuminate\Support\Arr;

class ProfileService
{
    /**
     * Create the user's default profile.
     *
     * @param int $userId
     * @param array<string, any> $infor
     * @return \App\Models\User\Profile
     */
    public function createUserProfile(int $userId, array $infor)
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
     * Update the user's profile.
     *
     * @param int $userId
     * @param array<string, any> $newProfile
     * @return
     */
    public function updateUserProfile(int $userId, array $newProfile)
    {
        return Profile::where('user_id', $userId)
            ->update(Arr::except($newProfile, 'avatar'));
    }
}
