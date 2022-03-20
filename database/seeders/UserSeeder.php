<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'username' => 'user01',
                'email' => 'user01@gmail.com',
                'password' => '$2a$10$sLA1tbDom5TwBRKLyhpYreEw6FEAUM4U74RtTXqK91cKjNbKShTFK', // password
                'email_verified_at' => now('GMT'),
            ],
            [
                'username' => 'user02',
                'email' => 'user02@gmail.com',
                'password' => '$2a$10$sLA1tbDom5TwBRKLyhpYreEw6FEAUM4U74RtTXqK91cKjNbKShTFK', // password
                'email_verified_at' => null,
            ],
        ]);
    }
}
