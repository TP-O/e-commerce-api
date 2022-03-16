<?php

namespace Database\Seeders;

use App\Enums\UserAddressType;
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
                'id' => UserAddressType::Default,
                'name' => 'Default address',
            ],
            [
                'id' => UserAddressType::Return,
                'name' => 'Return address',
            ],
            [
                'id' => UserAddressType::Pickup,
                'name' => 'Pickup address',
            ],
        ]);
    }
}
