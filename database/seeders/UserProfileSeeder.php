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
                'avatar_image' => '',
                'phone' => '0338620888',
                'gender' => 1,
                'date_of_birth' => Carbon::create(2001, 12, 20, 0, 0, 0, 'GMT'),
            ],
            [
                'user_id' => 2,
                'display_name' => 'User 02',
                'avatar_image' => '',
                'phone' => null,
                'gender' => 1,
                'date_of_birth' => Carbon::create(2001, 1, 1, 0, 0, 0, 'GMT'),
            ]
        ]);
    }
}
