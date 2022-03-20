<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserAddressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_addresses')->insert([
            [
                'full_name' => 'User 01',
                'phone' => '0338620777',
                'state' => 'Dong Nai',
                'city' => 'Bien Hoa',
                'town' => 'Long Binh Tan',
                'address' => 'Address 01 of User 01',
                'is_home' => true,
            ],
            [
                'full_name' => 'User 01',
                'phone' => '0338620888',
                'state' => 'XXX',
                'city' => 'YYY',
                'town' => 'ZZZ',
                'address' => 'Address 02 of User 01',
                'is_home' => false,
            ],
            [
                'full_name' => 'User 02',
                'phone' => '0338620999',
                'state' => 'XXX',
                'city' => 'YYY',
                'town' => 'ZZZ',
                'address' => 'Address 01 of User 02',
                'is_home' => true,
            ],
        ]);
    }
}
