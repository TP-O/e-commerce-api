<?php

namespace Database\Seeders;

use App\Enums\AdminRole;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('administrators')->insert([
            [
                'role_id' => AdminRole::Administrator,
                'username' => 'admin01',
                'email' => 'admin01@gmail.com',
                'password' => '$2a$10$sLA1tbDom5TwBRKLyhpYreEw6FEAUM4U74RtTXqK91cKjNbKShTFK', // password
                'email_verified_at' => now('GMT'),
            ],
            [
                'role_id' => AdminRole::Administrator,
                'username' => 'admin02',
                'email' => 'admin02@gmail.com',
                'password' => '$2a$10$sLA1tbDom5TwBRKLyhpYreEw6FEAUM4U74RtTXqK91cKjNbKShTFK', // password
                'email_verified_at' => null,
            ],
        ]);
    }
}
