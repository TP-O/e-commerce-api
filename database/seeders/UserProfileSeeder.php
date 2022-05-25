<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_profiles')->insert([
            [
                'user_id' => 1,
                'display_name' => 'User 01',
                'avatar_image' => 'demo-avatar-01',
                'phone' => '0338620888',
                'gender' => 1,
                'date_of_birth' => Carbon::create(2001, 12, 20, 0, 0, 0, 'UTC'),
            ],
            [
                'user_id' => 2,
                'display_name' => 'User 02',
                'avatar_image' => 'demo-avatar-02',
                'phone' => null,
                'gender' => 1,
                'date_of_birth' => Carbon::create(2001, 1, 1, 0, 0, 0, 'UTC'),
            ],
            [
                'user_id' => 3,
                'display_name' => 'Powder',
                'avatar_image' => 'demo-avatar-03',
                'phone' => '03386275328',
                'gender' => 1,
                'date_of_birth' => Carbon::create(2001, 12, 2, 0, 0, 0, 'UTC'),
            ],
            [
                'user_id' => 4,
                'display_name' => 'Thuong Truong',
                'avatar_image' => 'demo-avatar-04',
                'phone' => '0346739643',
                'gender' => 2,
                'date_of_birth' => Carbon::create(2001, 1, 20, 0, 0, 0, 'UTC'),
            ],
            [
                'user_id' => 5,
                'display_name' => 'Phong Le',
                'avatar_image' => 'demo-avatar-05',
                'phone' => '0437964258',
                'gender' => 3,
                'date_of_birth' => Carbon::create(2001, 2, 2, 0, 0, 0, 'UTC'),
            ],
            [
                'user_id' => 6,
                'display_name' => 'Dinh Thinh',
                'avatar_image' => 'demo-avatar-06',
                'phone' => '03869346742',
                'gender' => 1,
                'date_of_birth' => Carbon::create(2001, 4, 20, 0, 0, 0, 'UTC'),
            ],
            [
                'user_id' => 7,
                'display_name' => 'Trung Truc',
                'avatar_image' => 'demo-avatar-07',
                'phone' => '07248667386',
                'gender' => 1,
                'date_of_birth' => Carbon::create(2001, 12, 3, 0, 0, 0, 'UTC'),
            ],
            [
                'user_id' => 8,
                'display_name' => 'Con Card Cute',
                'avatar_image' => 'demo-avatar-08',
                'phone' => '0123639865',
                'gender' => 2,
                'date_of_birth' => Carbon::create(2001, 9, 20, 0, 0, 0, 'UTC'),
            ],
            [
                'user_id' => 9,
                'display_name' => 'Hip Hop NeverDied',
                'avatar_image' => 'demo-avatar-09',
                'phone' => '02376349865',
                'gender' => 2,
                'date_of_birth' => Carbon::create(2001, 12, 8, 0, 0, 0, 'UTC'),
            ],
            [
                'user_id' => 10,
                'display_name' => 'Blue Blue',
                'avatar_image' => 'demo-avatar-10',
                'phone' => '0124568645',
                'gender' => 2,
                'date_of_birth' => Carbon::create(2001, 7, 7, 0, 0, 0, 'UTC'),
            ],
            [
                'user_id' => 11,
                'display_name' => 'PhongC a-k',
                'avatar_image' => 'demo-avatar-11',
                'phone' => '0634875386',
                'gender' => 3,
                'date_of_birth' => Carbon::create(2001, 3, 3, 0, 0, 0, 'UTC'),
            ],
            [
                'user_id' => 12,
                'display_name' => 'Jhin',
                'avatar_image' => 'demo-avatar-12',
                'phone' => null,
                'gender' => 1,
                'date_of_birth' => Carbon::create(2001, 8, 12, 0, 0, 0, 'UTC'),
            ],
            [
                'user_id' => 13,
                'display_name' => 'Anie',
                'avatar_image' => 'demo-avatar-13',
                'phone' => null,
                'gender' => 1,
                'date_of_birth' => Carbon::create(2001, 7, 12, 0, 0, 0, 'UTC'),
            ],
            [
                'user_id' => 14,
                'display_name' => 'Ahri',
                'avatar_image' => 'demo-avatar-14',
                'phone' => null,
                'gender' => 1,
                'date_of_birth' => Carbon::create(2001, 12, 6, 0, 0, 0, 'UTC'),
            ],
            [
                'user_id' => 15,
                'display_name' => 'Noctune',
                'avatar_image' => 'demo-avatar-15',
                'phone' => null,
                'gender' => 1,
                'date_of_birth' => Carbon::create(2001, 6, 9, 0, 0, 0, 'UTC'),
            ],
            [
                'user_id' => 16,
                'display_name' => 'Ashe',
                'avatar_image' => 'demo-avatar-16',
                'phone' => null,
                'gender' => 2,
                'date_of_birth' => Carbon::create(2001, 4, 1, 0, 0, 0, 'UTC'),
            ],
            [
                'user_id' => 17,
                'display_name' => 'Yasuo',
                'avatar_image' => 'demo-avatar-17',
                'phone' => null,
                'gender' => 1,
                'date_of_birth' => Carbon::create(2001, 1, 3, 0, 0, 0, 'UTC'),
            ],
            [
                'user_id' => 18,
                'display_name' => 'Maphite',
                'avatar_image' => 'demo-avatar-18',
                'phone' => null,
                'gender' => 1,
                'date_of_birth' => Carbon::create(2001, 5, 7, 0, 0, 0, 'UTC'),
            ],
            [
                'user_id' => 19,
                'display_name' => 'Yone',
                'avatar_image' => 'demo-avatar-19',
                'phone' => null,
                'gender' => 1,
                'date_of_birth' => Carbon::create(2001, 7, 25, 0, 0, 0, 'UTC'),
            ],
            [
                'user_id' => 20,
                'display_name' => 'Darius',
                'avatar_image' => 'demo-avatar-20',
                'phone' => null,
                'gender' => 1,
                'date_of_birth' => Carbon::create(2001, 12, 1, 0, 0, 0, 'UTC'),
            ],
        ]);
    }
}
