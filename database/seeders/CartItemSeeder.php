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
                'product_model_id' => 3,
                'quantity' => 1,
            ],
            [
                'user_id' => 2,
                'product_model_id' => 9,
                'quantity' => 2,
            ],
            [
                'user_id' => 2,
                'product_model_id' => 20,
                'quantity' => 3,
            ],
        ]);
    }
}
