<?php

namespace Database\Seeders;

use App\Enums\UserAddressType;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserAddressLinkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_address_links')->insert([
            [
                'user_id' => 1,
                'address_id' => 1,
                'type_id' => null,
            ],
            [
                'user_id' => 1,
                'address_id' => 1,
                'type_id' => UserAddressType::Default,
            ],
            [
                'user_id' => 1,
                'address_id' => 2,
                'type_id' => null,
            ],
            [
                'user_id' => 1,
                'address_id' => 2,
                'type_id' => UserAddressType::Pickup,
            ],
            [
                'user_id' => 1,
                'address_id' => 2,
                'type_id' => UserAddressType::Return,
            ],
            [
                'user_id' => 2,
                'address_id' => 2,
                'type_id' => null,
            ],
        ]);
    }
}
