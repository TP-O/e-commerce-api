<?php

namespace Database\Seeders;

use App\Enums\AddressType;
use App\Enums\UserAddressType;
use App\Models\Account\User\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AddressableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('addressables')->insert([
            [
                'addressable_type' => User::class,
                'addressable_id' => 1,
                'address_id' => 1,
                'type_id' => null,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 1,
                'address_id' => 1,
                'type_id' => AddressType::Default,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 1,
                'address_id' => 2,
                'type_id' => null,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 2,
                'address_id' => 3,
                'type_id' => null,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 2,
                'address_id' => 3,
                'type_id' => AddressType::Pickup,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 2,
                'address_id' => 3,
                'type_id' => AddressType::Return,
            ],
        ]);
    }
}
