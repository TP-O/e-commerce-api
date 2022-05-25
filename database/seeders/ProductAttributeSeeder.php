<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductAttributeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product_attributes')->insert([
            [
                'product_id' => 1,
                'attribute_id' => 73,
                'value' => 'Type-C',
            ],
            [
                'product_id' => 1,
                'attribute_id' => 108,
                'value' => 'Yes',
            ],

            [
                'product_id' => 2,
                'attribute_id' => 73,
                'value' => 'Type-C',
            ],
            [
                'product_id' => 2,
                'attribute_id' => 108,
                'value' => 'Yes',
            ],

            [
                'product_id' => 5,
                'attribute_id' => 71,
                'value' => 'All',
            ],
            [
                'product_id' => 5,
                'attribute_id' => 73,
                'value' => 'Type-C',
            ],

            [
                'product_id' => 6,
                'attribute_id' => 71,
                'value' => 'All',
            ],
            [
                'product_id' => 6,
                'attribute_id' => 73,
                'value' => 'Type-C',
            ],

            [
                'product_id' => 7,
                'attribute_id' => 73,
                'value' => 'Type-C',
            ],
            [
                'product_id' => 7,
                'attribute_id' => 108,
                'value' => 'Yes',
            ],

            [
                'product_id' => 8,
                'attribute_id' => 73,
                'value' => 'Type-C',
            ],
            [
                'product_id' => 8,
                'attribute_id' => 108,
                'value' => 'Yes',
            ],
        ]);
    }
}
