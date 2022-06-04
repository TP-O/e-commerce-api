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
                'price' => 516.00,
                'stock' => 5,
                'variation_index' => json_encode([0, 0]),
            ],
            [
                'product_id' => 1,
                'sku' => '',
                'price' => 296.00,
                'stock' => 5,
                'variation_index' => json_encode([0, 1]),
            ],
            [
                'product_id' => 1,
                'sku' => '',
                'price' => 406.00,
                'stock' => 5,
                'variation_index' => json_encode([1, 0]),
            ],
            [
                'product_id' => 1,
                'sku' => '',
                'price' => 515.00,
                'stock' => 50,
                'variation_index' => json_encode([1, 1]),
            ],
            // [
            //     'product_id' => 1,
            //     'sku' => '',
            //     'price' => 24.90,
            //     'stock' => 50,
            //     'variation_index' => json_encode([0]),
            // ],
            // [
            //     'product_id' => 1,
            //     'sku' => '',
            //     'price' => 24.90,
            //     'stock' => 50,
            //     'variation_index' => json_encode([1]),
            // ],
            [
                'product_id' => 2,
                'sku' => '',
                'price' => 0.30,
                'stock' => 50,
                'variation_index' => json_encode([0]),
            ],
            [
                'product_id' => 2,
                'sku' => '',
                'price' => 0.30,
                'stock' => 50,
                'variation_index' => json_encode([1]),
            ],
            [
                'product_id' => 3,
                'sku' => '',
                'price' => 59.90,
                'stock' => 50,
                'variation_index' => json_encode([0]),
            ],
            [
                'product_id' => 3,
                'sku' => '',
                'price' => 59.90,
                'stock' => 50,
                'variation_index' => json_encode([1]),
            ],
            [
                'product_id' => 4,
                'sku' => '',
                'price' => 22.90,
                'stock' => 50,
                'variation_index' => json_encode([0]),
            ],
            [
                'product_id' => 4,
                'sku' => '',
                'price' => 22.90,
                'stock' => 50,
                'variation_index' => json_encode([1]),
            ],
            [
                'product_id' => 5,
                'sku' => '',
                'price' => 299.00,
                'stock' => 50,
                'variation_index' => json_encode([0]),
            ],
            [
                'product_id' => 5,
                'sku' => '',
                'price' => 299.00,
                'stock' => 50,
                'variation_index' => json_encode([1]),
            ],
            [
                'product_id' => 6,
                'sku' => '',
                'price' => 2599.00,
                'stock' => 50,
                'variation_index' => json_encode([0]),
            ],
            [
                'product_id' => 6,
                'sku' => '',
                'price' => 2599.00,
                'stock' => 50,
                'variation_index' => json_encode([1]),
            ],

            [
                'product_id' => 7,
                'sku' => '',
                'price' => 2000.00,
                'stock' => 50,
                'variation_index' => json_encode([0]),
            ],
            [
                'product_id' => 7,
                'sku' => '',
                'price' => 2100.00,
                'stock' => 50,
                'variation_index' => json_encode([1]),
            ],


            [
                'product_id' => 8,
                'sku' => '',
                'price' => 8.00,
                'stock' => 50,
                'variation_index' => json_encode([0, 0]),
            ],
            [
                'product_id' => 8,
                'sku' => '',
                'price' => 16.00,
                'stock' => 50,
                'variation_index' => json_encode([0, 1]),
            ],
            [
                'product_id' => 8,
                'sku' => '',
                'price' => 7.00,
                'stock' => 50,
                'variation_index' => json_encode([1, 0]),
            ],
            [
                'product_id' => 8,
                'sku' => '',
                'price' => 14.00,
                'stock' => 50,
                'variation_index' => json_encode([1, 1]),
            ],

            [
                'product_id' => 9,
                'sku' => '',
                'price' => 4.00,
                'stock' => 50,
                'variation_index' => json_encode([0, 0]),
            ],
            [
                'product_id' => 9,
                'sku' => '',
                'price' => 8.00,
                'stock' => 50,
                'variation_index' => json_encode([0, 1]),
            ],
            [
                'product_id' => 9,
                'sku' => '',
                'price' => 5.00,
                'stock' => 50,
                'variation_index' => json_encode([1, 0]),
            ],
            [
                'product_id' => 9,
                'sku' => '',
                'price' => 10.00,
                'stock' => 50,
                'variation_index' => json_encode([1, 1]),
            ],

            [
                'product_id' => 10,
                'sku' => '',
                'price' => 215.00,
                'stock' => 50,
                'variation_index' => json_encode([0]),
            ],
            [
                'product_id' => 10,
                'sku' => '',
                'price' => 200.00,
                'stock' => 50,
                'variation_index' => json_encode([1]),
            ],

            [
                'product_id' => 11,
                'sku' => '',
                'price' => 500.00,
                'stock' => 50,
                'variation_index' => json_encode([0]),
            ],
            [
                'product_id' => 11,
                'sku' => '',
                'price' => 499.00,
                'stock' => 50,
                'variation_index' => json_encode([1]),
            ],

            [
                'product_id' => 12,
                'sku' => '',
                'price' => 69.00,
                'stock' => 50,
                'variation_index' => json_encode([]),
            ],

            [
                'product_id' => 13,
                'sku' => '',
                'price' => 50.00,
                'stock' => 50,
                'variation_index' => json_encode([0]),
            ],
            [
                'product_id' => 13,
                'sku' => '',
                'price' => 40.00,
                'stock' => 50,
                'variation_index' => json_encode([1]),
            ],

            [
                'product_id' => 14,
                'sku' => '',
                'price' => 9.00,
                'stock' => 50,
                'variation_index' => json_encode([0]),
            ],
            [
                'product_id' => 14,
                'sku' => '',
                'price' => 14.00,
                'stock' => 50,
                'variation_index' => json_encode([1]),
            ],

            [
                'product_id' => 15,
                'sku' => '',
                'price' => 2.58,
                'stock' => 50,
                'variation_index' => json_encode([0]),
            ],
            [
                'product_id' => 15,
                'sku' => '',
                'price' => 2.76,
                'stock' => 50,
                'variation_index' => json_encode([1]),
            ],

            [
                'product_id' => 16,
                'sku' => '',
                'price' => 8.00,
                'stock' => 50,
                'variation_index' => json_encode([0]),
            ],
            [
                'product_id' => 16,
                'sku' => '',
                'price' => 10.00,
                'stock' => 50,
                'variation_index' => json_encode([1]),
            ],

            [
                'product_id' => 17,
                'sku' => '',
                'price' => 13.00,
                'stock' => 50,
                'variation_index' => json_encode([0]),
            ],
            [
                'product_id' => 17,
                'sku' => '',
                'price' => 15.00,
                'stock' => 50,
                'variation_index' => json_encode([1]),
            ],

            [
                'product_id' => 18,
                'sku' => '',
                'price' => 69.00,
                'stock' => 50,
                'variation_index' => json_encode([0]),
            ],
            [
                'product_id' => 18,
                'sku' => '',
                'price' => 105.00,
                'stock' => 50,
                'variation_index' => json_encode([1]),
            ],

            [
                'product_id' => 19,
                'sku' => '',
                'price' => 200.00,
                'stock' => 50,
                'variation_index' => json_encode([0]),
            ],
            [
                'product_id' => 19,
                'sku' => '',
                'price' => 240.00,
                'stock' => 50,
                'variation_index' => json_encode([1]),
            ],

            [
                'product_id' => 20,
                'sku' => '',
                'price' => 1089.00,
                'stock' => 50,
                'variation_index' => json_encode([0, 0]),
            ],
            [
                'product_id' => 20,
                'sku' => '',
                'price' => 1189.00,
                'stock' => 50,
                'variation_index' => json_encode([0, 1]),
            ],
            [
                'product_id' => 20,
                'sku' => '',
                'price' => 1089.00,
                'stock' => 50,
                'variation_index' => json_encode([1, 0]),
            ],
            [
                'product_id' => 20,
                'sku' => '',
                'price' => 1180.00,
                'stock' => 50,
                'variation_index' => json_encode([1, 1]),
            ],


            [
                'product_id' => 21,
                'sku' => '',
                'price' => 1689.00,
                'stock' => 50,
                'variation_index' => json_encode([0, 0]),
            ],
            [
                'product_id' => 21,
                'sku' => '',
                'price' => 1789.00,
                'stock' => 50,
                'variation_index' => json_encode([0, 1]),
            ],
            [
                'product_id' => 21,
                'sku' => '',
                'price' => 1689.00,
                'stock' => 50,
                'variation_index' => json_encode([1, 0]),
            ],
            [
                'product_id' => 21,
                'sku' => '',
                'price' => 1789.00,
                'stock' => 50,
                'variation_index' => json_encode([1, 1]),
            ],

            [
                'product_id' => 22,
                'sku' => '',
                'price' => 79.00,
                'stock' => 50,
                'variation_index' => json_encode([0]),
            ],

            [
                'product_id' => 23,
                'sku' => '',
                'price' => 90.00,
                'stock' => 50,
                'variation_index' => json_encode([0]),
            ],

            [
                'product_id' => 24,
                'sku' => '',
                'price' => 45.00,
                'stock' => 50,
                'variation_index' => json_encode([]),
            ],

            [
                'product_id' => 25,
                'sku' => '',
                'price' => 123.00,
                'stock' => 50,
                'variation_index' => json_encode([0]),
            ],

            [
                'product_id' => 26,
                'sku' => '',
                'price' => 16.00,
                'stock' => 50,
                'variation_index' => json_encode([0]),
            ],

            [
                'product_id' => 27,
                'sku' => '',
                'price' => 79.00,
                'stock' => 50,
                'variation_index' => json_encode([0]),
            ],

            [
                'product_id' => 28,
                'sku' => '',
                'price' => 43.00,
                'stock' => 50,
                'variation_index' => json_encode([0]),
            ],

            [
                'product_id' => 29,
                'sku' => '',
                'price' => 121.00,
                'stock' => 50,
                'variation_index' => json_encode([0]),
            ],

            [
                'product_id' => 30,
                'sku' => '',
                'price' => 9.00,
                'stock' => 50,
                'variation_index' => json_encode([0]),
            ],

            [
                'product_id' => 31,
                'sku' => '',
                'price' => 17.00,
                'stock' => 50,
                'variation_index' => json_encode([0]),
            ],

            [
                'product_id' => 32,
                'sku' => '',
                'price' => 111.00,
                'stock' => 50,
                'variation_index' => json_encode([0]),
            ],

            [
                'product_id' => 33,
                'sku' => '',
                'price' => 222.00,
                'stock' => 50,
                'variation_index' => json_encode([0]),
            ],

        ]);
    }
}
