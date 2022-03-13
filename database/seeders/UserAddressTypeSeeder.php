<?php

namespace Database\Seeders;

use App\Enums\UserAddress;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserAddressTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_address_types')->insert([
            [
                'id' => UserAddress::Default,
                'name' => 'Default address',
            ],
            [
                'id' => UserAddress::Return,
                'name' => 'Return address',
            ],
            [
                'id' => UserAddress::Pickup,
                'name' => 'Pickup address',
            ],
        ]);
    }
}
