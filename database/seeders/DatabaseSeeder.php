<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            AdminRoleSeeder::class,
            AdminSeeder::class,

            UserSeeder::class,
            UserProfileSeeder::class,
            UserAddressTypeSeeder::class,
            UserAddressSeeder::class,
            UserAddressLinkSeeder::class,

            ShopSeeder::class,
            ShopBannerSeeder::class,
        ]);
    }
}
