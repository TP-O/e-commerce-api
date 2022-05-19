<?php

namespace Database\Seeders;

use App\Enums\ProductStatus;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            [
                'shop_id' => 1,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => 'Samsung Galaxy A53 5G | A52s 5G (8GB+128GB/256GB) with 1 Year Warranty by Samsung',
                'description' => '',
                'weight' => 500,
                'images' => json_encode([
                    '93bc5fa42886e635fd9f103d03c9c31d',
                    '6085df7be931e1ef9d79ce125cacdb8b',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'Colour',
                        'options' => [
                            'Awesome Black',
                            'Awesome White',
                        ]
                    ],
                    [
                        'name' => 'Model',
                        'options' => [
                            'A52s 8GB+128GB',
                            'A53 8GB+128GB',
                        ],
                    ],
                ]),
            ]
        ]);
    }
}
