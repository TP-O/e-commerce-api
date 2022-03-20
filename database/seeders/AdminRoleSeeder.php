<?php

namespace Database\Seeders;

use App\Enums\AdminRole;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdminRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('administrator_roles')->insert([
            [
                'id' => AdminRole::Administrator,
                'name' => 'Administrator',
            ],
        ]);
    }
}
