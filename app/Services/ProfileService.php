<?php

namespace App\Services;

use App\Models\User\Profile;

class ProfileService
{
    /**
     * Create the user's default profile.
     *
     * @param int $userId
     * @param array $input
     * @return \App\Models\User\Profile
     */
    public function createUserProfile($userId, $input)
    {
        $profile = new Profile([
            'user_id' => $userId,
            'display_name' => $input['username'] ?? '',
            'avatar_image' => $input['avatar_image'] ?? '',
        ]);

        $profile->save();

        return $profile;
    }
}
