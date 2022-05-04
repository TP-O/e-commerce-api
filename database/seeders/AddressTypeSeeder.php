<?php

namespace Database\Seeders;

use App\Enums\AddressType;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AddressTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('address_types')->insert([
            [
                'id' => AddressType::Default,
                'name' => 'Default address',
            ],
            [
                'id' => AddressType::Return,
                'name' => 'Return address',
            ],
            [
                'id' => AddressType::Pickup,
                'name' => 'Pickup address',
            ],
        ]);
    }
}
