<?php

namespace Database\Seeders;

use App\Enums\OrderStatus;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrderProgressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('order_progresses')->insert([
            [
                'order_id' => 1,
                'status_id' => OrderStatus::Ready,
                'note' => 'Ready!!!!!!!!!!!!!!!',
            ],
            [
                'order_id' => 1,
                'status_id' => OrderStatus::Delivering,
                'note' => 'Delivering!!!!!!!!!!!!!!!',
            ],
            [
                'order_id' => 1,
                'status_id' => OrderStatus::Delivered,
                'note' => 'Delivered!!!!!!!!!!!!!!!',
            ],
            [
                'order_id' => 2,
                'status_id' => OrderStatus::Ready,
                'note' => 'Ready GOOOOOO!!!!!!!!!!!!!!!',
            ],
            [
                'order_id' => 2,
                'status_id' => OrderStatus::Delivering,
                'note' => 'Delivering..........',
            ],
            [
                'order_id' => 2,
                'status_id' => OrderStatus::Delivered,
                'note' => 'Delivered :D',
            ],
            [
                'order_id' => 3,
                'status_id' => OrderStatus::Ready,
                'note' => 'Ready!!!!!!!!!!!!!!!',
            ],
            [
                'order_id' => 3,
                'status_id' => OrderStatus::Delivering,
                'note' => 'Delivering ===>>>',
            ],
        ]);
    }
}
