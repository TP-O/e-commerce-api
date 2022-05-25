<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AddressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('addresses')->insert([
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
            [
                'full_name' => 'Phong Tran',
                'phone' => '0338626489',
                'state' => 'Thu Duc',
                'city' => 'TP.HCM',
                'town' => 'An Khanh',
                'address' => '146/9',
                'is_home' => true,
            ],
            [
                'full_name' => 'Yasuo',
                'phone' => '0338623589',
                'state' => 'Thu Duc',
                'city' => 'TP.HCM',
                'town' => 'Cat Lai',
                'address' => '286/3',
                'is_home' => false,
            ],
            [
                'full_name' => 'Yone',
                'phone' => '0745692845',
                'state' => 'District 3',
                'city' => 'TP.HCM',
                'town' => 'Ward 1',
                'address' => '34/8',
                'is_home' => true,
            ],
            [
                'full_name' => 'Anie',
                'phone' => '0336492764',
                'state' => 'District 3',
                'city' => 'TP.HCM',
                'town' => 'Ward 4',
                'address' => '12/7',
                'is_home' => true,
            ],
            [
                'full_name' => 'Phong Ngao',
                'phone' => '0335327590',
                'state' => 'District 1',
                'city' => 'TP.HCM',
                'town' => 'Pham Ngu Lao',
                'address' => '6/9',
                'is_home' => false,
            ],
            [
                'full_name' => 'Ahri',
                'phone' => '0153495711',
                'state' => 'District 1',
                'city' => 'TP.HCM',
                'town' => 'Nguyen Cu Trinh',
                'address' => '20/6',
                'is_home' => true,
            ],
            [
                'full_name' => 'Noctune',
                'phone' => '07642391875',
                'state' => 'District 3',
                'city' => 'TP.HCM',
                'town' => 'Vo Thi Sau',
                'address' => '7/4',
                'is_home' => false,
            ],
            [
                'full_name' => 'Malphite',
                'phone' => '0143286594',
                'state' => 'District 4',
                'city' => 'TP.HCM',
                'town' => 'Ward 9',
                'address' => '30/4',
                'is_home' => true,
            ],
            [
                'full_name' => 'Jhin',
                'phone' => '0542976486',
                'state' => 'District 5',
                'city' => 'TP.HCM',
                'town' => 'Ward 1',
                'address' => '26/6',
                'is_home' => false,
            ],
            [
                'full_name' => 'Jinx',
                'phone' => '0916407555',
                'state' => 'District 5',
                'city' => 'TP.HCM',
                'town' => 'Ward 5',
                'address' => '12/07',
                'is_home' => true,
            ],
            [
                'full_name' => 'Jana',
                'phone' => '0123456789',
                'state' => 'District 5',
                'city' => 'TP.HCM',
                'town' => 'Ward 7',
                'address' => '5/7',
                'is_home' => true,
            ],
            [
                'full_name' => 'Lux',
                'phone' => '01253967538',
                'state' => 'District 7',
                'city' => 'TP.HCM',
                'town' => 'Ward 7',
                'address' => '14/7',
                'is_home' => true,
            ],
            [
                'full_name' => 'Natilus',
                'phone' => '0123694376',
                'state' => 'District 6',
                'city' => 'TP.HCM',
                'town' => 'Ward 7',
                'address' => '9/2',
                'is_home' => false,
            ],
            [
                'full_name' => 'Sona',
                'phone' => '0549750153',
                'state' => 'District 7',
                'city' => 'TP.HCM',
                'town' => 'Phu Nhuan',
                'address' => '6/7',
                'is_home' => true,
            ],
            [
                'full_name' => 'Bean',
                'phone' => '0364913865',
                'state' => 'District 7',
                'city' => 'TP.HCM',
                'town' => 'Binh Thuan',
                'address' => '3/3',
                'is_home' => false,
            ],
            [
                'full_name' => 'Snack',
                'phone' => '0486529548',
                'state' => 'District 7',
                'city' => 'TP.HCM',
                'town' => 'Tan Phong',
                'address' => '6/8',
                'is_home' => true,
            ],
            [
                'full_name' => 'Cassiopia',
                'phone' => '0265395876',
                'state' => 'District 7',
                'city' => 'TP.HCM',
                'town' => 'Tan Hung',
                'address' => '7/5',
                'is_home' => true,
            ],
            [
                'full_name' => 'Zed',
                'phone' => '0154938654',
                'state' => 'District 8',
                'city' => 'TP.HCM',
                'town' => 'Ward 10',
                'address' => '231/4',
                'is_home' => true,
            ],
        ]);
    }
}
