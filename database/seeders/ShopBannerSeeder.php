<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ShopBannerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('shop_banners')->insert([
            [
                'shop_id' => 1,
                'source' => 'https://youtu.be/GxUxTtdkW2E',
            ],
            [
                'shop_id' => 1,
                'source' => 'https://youtu.be/S8_YwFLCh4U',
            ],
            [
                'shop_id' => 1,
                'source' => 'demo/shop-banner-01_01',
            ],
        ]);
    }
}
