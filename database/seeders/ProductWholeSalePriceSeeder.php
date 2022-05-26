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
                'price' => 23.00,
            ],
            [
                'product_id' => 2,
                'min' => 5,
                'max' => 10,
                'price' => 0.20,
            ],
            [
                'product_id' => 3,
                'min' => 5,
                'max' => 10,
                'price' => 50.00,
            ],
            [
                'product_id' => 4,
                'min' => 5,
                'max' => 10,
                'price' => 22.00,
            ],
            [
                'product_id' => 5,
                'min' => 5,
                'max' => 10,
                'price' => 270.00,
            ],
            [
                'product_id' => 6,
                'min' => 5,
                'max' => 10,
                'price' => 2550.00,
            ],
            [
                'product_id' => 11,
                'min' => 5,
                'max' => 10,
                'price' => 60.00,
            ],
            [
                'product_id' => 21,
                'min' => 5,
                'max' => 10,
                'price' => 75.00,
            ],
            [
                'product_id' => 22,
                'min' => 5,
                'max' => 10,
                'price' => 85.00,
            ],
            [
                'product_id' => 23,
                'min' => 5,
                'max' => 10,
                'price' => 40.00,
            ],
            [
                'product_id' => 24,
                'min' => 5,
                'max' => 10,
                'price' => 120.00,
            ],
            [
                'product_id' => 25,
                'min' => 5,
                'max' => 10,
                'price' => 15.00,
            ],
            [
                'product_id' => 26,
                'min' => 5,
                'max' => 10,
                'price' => 75.00,
            ],
            [
                'product_id' => 27,
                'min' => 5,
                'max' => 10,
                'price' => 40.00,
            ],
            [
                'product_id' => 28,
                'min' => 5,
                'max' => 10,
                'price' => 110.00,
            ],
            [
                'product_id' => 29,
                'min' => 5,
                'max' => 10,
                'price' => 7.00,
            ],
            [
                'product_id' => 30,
                'min' => 5,
                'max' => 10,
                'price' => 15.00,
            ],
            [
                'product_id' => 31,
                'min' => 5,
                'max' => 10,
                'price' => 100.00,
            ],
            [
                'product_id' => 32,
                'min' => 5,
                'max' => 10,
                'price' => 200.00,
            ],

        ]);
    }
}
