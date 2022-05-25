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
            [
                'addressable_type' => User::class,
                'addressable_id' => 3,
                'address_id' => 4,
                'type_id' => null,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 3,
                'address_id' => 4,
                'type_id' => AddressType::Pickup,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 4,
                'address_id' => 5,
                'type_id' => null,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 4,
                'address_id' => 5,
                'type_id' => AddressType::Pickup,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 4,
                'address_id' => 5,
                'type_id' => AddressType::Default,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 5,
                'address_id' => 6,
                'type_id' => null,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 5,
                'address_id' => 6,
                'type_id' => AddressType::Pickup,
            ],

            [
                'addressable_type' => User::class,
                'addressable_id' => 6,
                'address_id' => 7,
                'type_id' => null,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 6,
                'address_id' => 7,
                'type_id' => AddressType::Pickup,
            ],

            [
                'addressable_type' => User::class,
                'addressable_id' => 7,
                'address_id' => 8,
                'type_id' => null,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 7,
                'address_id' => 8,
                'type_id' => AddressType::Pickup,
            ],

            [
                'addressable_type' => User::class,
                'addressable_id' => 8,
                'address_id' => 9,
                'type_id' => null,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 8,
                'address_id' => 9,
                'type_id' => AddressType::Pickup,
            ],

            [
                'addressable_type' => User::class,
                'addressable_id' => 9,
                'address_id' => 10,
                'type_id' => null,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 9,
                'address_id' => 10,
                'type_id' => AddressType::Pickup,
            ],

            [
                'addressable_type' => User::class,
                'addressable_id' => 10,
                'address_id' => 11,
                'type_id' => null,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 10,
                'address_id' => 11,
                'type_id' => AddressType::Pickup,
            ],

            [
                'addressable_type' => User::class,
                'addressable_id' => 11,
                'address_id' => 12,
                'type_id' => null,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 11,
                'address_id' => 12,
                'type_id' => AddressType::Pickup,
            ],

            [
                'addressable_type' => User::class,
                'addressable_id' => 12,
                'address_id' => 13,
                'type_id' => null,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 12,
                'address_id' => 13,
                'type_id' => AddressType::Pickup,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 13,
                'address_id' => 14,
                'type_id' => null,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 13,
                'address_id' => 14,
                'type_id' => AddressType::Default,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 14,
                'address_id' => 15,
                'type_id' => null,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 14,
                'address_id' => 15,
                'type_id' => AddressType::Default,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 15,
                'address_id' => 16,
                'type_id' => null,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 15,
                'address_id' => 16,
                'type_id' => AddressType::Default,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 16,
                'address_id' => 17,
                'type_id' => null,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 16,
                'address_id' => 17,
                'type_id' => AddressType::Default,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 17,
                'address_id' => 18,
                'type_id' => null,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 17,
                'address_id' => 18,
                'type_id' => AddressType::Default,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 18,
                'address_id' => 19,
                'type_id' => null,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 18,
                'address_id' => 19,
                'type_id' => AddressType::Default,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 19,
                'address_id' => 20,
                'type_id' => null,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 19,
                'address_id' => 20,
                'type_id' => AddressType::Default,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 20,
                'address_id' => 21,
                'type_id' => null,
            ],
            [
                'addressable_type' => User::class,
                'addressable_id' => 20,
                'address_id' => 21,
                'type_id' => AddressType::Default,
            ],
        ]);
    }
}
