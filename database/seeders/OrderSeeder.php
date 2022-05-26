<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('orders')->insert([
            [
                'user_id' => 2,
                'product_id' => 4,
                'received_address_id' => 3,
                'pickup_address_id' => 5,
                'shop_id' => 4,
                'name' => '[✅SG Ready Stock] 🔥 60/80/100x40/50cm Nordic Study Table Laptop Home Office Desks Computer Modern Writing Table',
                'variations' => json_encode([
                    '60x40cm Curve White',
                ]),
                'quantity' => 2,
                'total' => 45.80,
                'grand_total' => 45.80,
            ],
            [
                'user_id' => 2,
                'product_id' => 13,
                'received_address_id' => 3,
                'pickup_address_id' => 10,
                'shop_id' => 9,
                'name' => 'Canvas bag female Korean Bag New Ladies Messenger Bag Canvas Literary Solid Color Single Tote Bag College and Middle School',
                'variations' => json_encode([
                    'White',
                ]),
                'quantity' => 1,
                'total' => 2.76,
                'grand_total' => 2.76,
            ],
            [
                'user_id' => 2,
                'product_id' => 19,
                'received_address_id' => 3,
                'pickup_address_id' => 13,
                'shop_id' => 12,
                'name' => 'novita Hot/Cold Water Dispenser W28 - The WaterStation + Free Gift',
                'variations' => json_encode([
                    'Arctic White',
                    'HydroNano™',
                ]),
                'quantity' => 5,
                'total' => 8945.00,
                'grand_total' => 8945.00,
            ],
        ]);
    }
}
