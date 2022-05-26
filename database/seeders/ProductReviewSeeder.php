<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product_reviews')->insert([
            [
                'user_id' => 2,
                'product_id' => 4,
                'order_id' => 1,
                'shop_id' => 4,
                'rating' => 4,
                'comment' => 'Godd product!!!!!!!!!!',
                'reply' => 'Thanks for your feedback :D',
                'variations' => json_encode([
                    '60x40cm Curve White',
                ]),
            ],
        ]);
    }
}
