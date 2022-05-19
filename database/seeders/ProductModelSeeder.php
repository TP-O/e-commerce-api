<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductModelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product_models')->insert([
            [
                'product_id' => 1,
                'sku' => '',
                'price' => 500.00,
                'stock' => 5,
                'variation_index' => json_encode([0, 0]),
            ],
            [
                'product_id' => 1,
                'sku' => '',
                'price' => 500.00,
                'stock' => 5,
                'variation_index' => json_encode([0, 1]),
            ],
            [
                'product_id' => 1,
                'sku' => '',
                'price' => 500.00,
                'stock' => 5,
                'variation_index' => json_encode([1, 0]),
            ],
            [
                'product_id' => 1,
                'sku' => '',
                'price' => 500.00,
                'stock' => 50,
                'variation_index' => json_encode([1, 1]),
            ]
        ]);
    }
}
