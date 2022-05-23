<?php

namespace Database\Seeders;

use App\Enums\OrderStatus;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrderStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('order_status')->insert([
            [
                'id' => OrderStatus::Processing,
                'name' => 'Processing',
            ],
            [
                'id' => OrderStatus::Ready,
                'name' => 'Ready',
            ],
            [
                'id' => OrderStatus::Delivering,
                'name' => 'Shipping',
            ],
            [
                'id' => OrderStatus::Delivered,
                'name' => 'Delivered',
            ],
            [
                'id' => OrderStatus::Cancelled,
                'name' => 'Cancelled',
            ],
            [
                'id' => OrderStatus::Return,
                'name' => 'Return',
            ],
        ]);
    }
}
