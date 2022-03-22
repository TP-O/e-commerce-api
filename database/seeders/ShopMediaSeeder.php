<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ShopMediaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('shop_media')->insert([
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
                'source' => '/public/image/demo/preview/shop/preview-01_01',
            ],
        ]);
    }
}
