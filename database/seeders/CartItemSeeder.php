<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CartItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cart_items')->insert([
            [
                'user_id' => 2,
                'product_model_id' => 2,
                'quantity' => 1,
            ],
            [
                'user_id' => 2,
                'product_model_id' => 8,
                'quantity' => 2,
            ],
            [
                'user_id' => 2,
                'product_model_id' => 19,
                'quantity' => 3,
            ],
        ]);
    }
}
