<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ShopSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('shops')->insert([
            [
                'id' => 1,
                'slug' => 'shop-01',
                'name' => 'Shop of User 01',
                'description' => 'This is a shope of user 01.',
                'avatar_image' => 'demo-avatar-01',
                'cover_image' => 'demo-shop-cover-01',
                'banners' => json_encode([
                    'https://youtu.be/GxUxTtdkW2E',
                    'https://youtu.be/S8_YwFLCh4U',
                    'demo-shop-banner-01_01',
                ]),
            ],
        ]);
    }
}
