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

            AddressTypeSeeder::class,
            AddressSeeder::class,
            AddressableSeeder::class,

            ShopSeeder::class,

            ProductStatusSeeder::class,
            ProductBrandSeeder::class,
            ProductCategorySeeder::class,
            ProductCategoryAttributeSeeder::class,
            ProductCategoryProductCategoryAttributeSeeder::class,
            ProductSeeder::class,
            ProductCategoryPathSeeder::class,
            ProductAttributeSeeder::class,
            ProductModelSeeder::class,
            ProductWholeSalePriceSeeder::class,

            CartItemSeeder::class,
            OrderStatusSeeder::class,
            OrderSeeder::class,
            OrderProgressSeeder::class,

            ProductReviewSeeder::class,
        ]);
    }
}
