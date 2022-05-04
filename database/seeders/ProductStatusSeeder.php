<?php

namespace Database\Seeders;

use App\Enums\ProductStatus;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product_status')->insert([
            [
                'id' => ProductStatus::Published,
                'name' => 'Published',
            ],
            [
                'id' => ProductStatus::Delisted,
                'name' => 'Delisted',
            ],
            [
                'id' => ProductStatus::Deleted,
                'name' => 'Deleted',
            ],
        ]);
    }
}
