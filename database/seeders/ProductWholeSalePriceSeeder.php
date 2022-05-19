<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductWholeSalePriceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product_wholesale_prices')->insert([
            [
                'product_id' => 1,
                'min' => 5,
                'max' => 10,
                'price' => 450.00,
            ]
        ]);
    }
}
