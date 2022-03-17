<?php

namespace App\Services;

use App\Models\User\Profile;

class ProfileService
{
    /**
     * Create the user's default profile.
     *
     * @param int $userId
     * @param array<string, any> $input
     * @return \App\Models\User\Profile
     */
    public function createUserProfile(int $userId, array $input)
    {
        $profile = new Profile([
            'user_id' => $userId,
            'display_name' => $input['username'] ?? '',
            'avatar_image' => $input['avatar_image'] ?? '',
        ]);

        $profile->save();

        return $profile;
    }

    /**
     * Update the user's profile.
     *
     * @param int $userId
     * @param array<string, any> $input
     * @return bool
     */
    public function updateUserProfile(int $userId, array $input)
    {
        return Profile::where('user_id', $userId)->update($input);
    }
}
