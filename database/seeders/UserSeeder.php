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
                'email_verified_at' => now('UTC'),
            ],
            [
                'username' => 'user02',
                'email' => 'user02@gmail.com',
                'password' => '$2a$10$sLA1tbDom5TwBRKLyhpYreEw6FEAUM4U74RtTXqK91cKjNbKShTFK', // password
                'email_verified_at' => null,
            ],
            [
                'username' => 'iampowder',
                'email' => 'silverclone206@gmail.com',
                'password' => '$2a$10$sLA1tbDom5TwBRKLyhpYreEw6FEAUM4U74RtTXqK91cKjNbKShTFK', // password
                'email_verified_at' => now('UTC'),
            ],
            [
                'username' => 'thuongtruong',
                'email' => 'thuongtruongoffical@gmail.com',
                'password' => '$2a$10$sLA1tbDom5TwBRKLyhpYreEw6FEAUM4U74RtTXqK91cKjNbKShTFK', // password
                'email_verified_at' => now('UTC'),
            ],
            [
                'username' => 'phongle',
                'email' => 'phongle69@gmail.com',
                'password' => '$2a$10$sLA1tbDom5TwBRKLyhpYreEw6FEAUM4U74RtTXqK91cKjNbKShTFK', // password
                'email_verified_at' => now('UTC'),
            ],
            [
                'username' => 'dinhthinh',
                'email' => 'dinhthinh69@gmail.com',
                'password' => '$2a$10$sLA1tbDom5TwBRKLyhpYreEw6FEAUM4U74RtTXqK91cKjNbKShTFK', // password
                'email_verified_at' => now('UTC'),
            ],
            [
                'username' => 'trungtruc',
                'email' => 'trungtruc123@gmail.com',
                'password' => '$2a$10$sLA1tbDom5TwBRKLyhpYreEw6FEAUM4U74RtTXqK91cKjNbKShTFK', // password
                'email_verified_at' => now('UTC'),
            ],
            [
                'username' => 'nowayhome000',
                'email' => 'phongngao666@gmail.com',
                'password' => '$2a$10$sLA1tbDom5TwBRKLyhpYreEw6FEAUM4U74RtTXqK91cKjNbKShTFK', // password
                'email_verified_at' => now('UTC'),
            ],
            [
                'username' => 'dangcaplamaimai2',
                'email' => 'neverdie999@gmail.com',
                'password' => '$2a$10$sLA1tbDom5TwBRKLyhpYreEw6FEAUM4U74RtTXqK91cKjNbKShTFK', // password
                'email_verified_at' => now('UTC'),
            ],
            [
                'username' => 'toitenla1',
                'email' => 'maimaila1nam@gmail.com',
                'password' => '$2a$10$sLA1tbDom5TwBRKLyhpYreEw6FEAUM4U74RtTXqK91cKjNbKShTFK', // password
                'email_verified_at' => now('UTC'),
            ],
            [
                'username' => 'comehome4',
                'email' => 'spiderman123@gmail.com',
                'password' => '$2a$10$sLA1tbDom5TwBRKLyhpYreEw6FEAUM4U74RtTXqK91cKjNbKShTFK', // password
                'email_verified_at' => now('UTC'),
            ],
            [
                'username' => 'darkness111',
                'email' => 'darkin127@gmail.com',
                'password' => '$2a$10$sLA1tbDom5TwBRKLyhpYreEw6FEAUM4U74RtTXqK91cKjNbKShTFK', // password
                'email_verified_at' => now('UTC'),
            ],
            [
                'username' => 'dulamnha777',
                'email' => 'dunhathemattroi123@gmail.com',
                'password' => '$2a$10$sLA1tbDom5TwBRKLyhpYreEw6FEAUM4U74RtTXqK91cKjNbKShTFK', // password
                'email_verified_at' => now('UTC'),
            ],
            [
                'username' => 'nofeedforU',
                'email' => 'ahehe123@gmail.com',
                'password' => '$2a$10$sLA1tbDom5TwBRKLyhpYreEw6FEAUM4U74RtTXqK91cKjNbKShTFK', // password
                'email_verified_at' => now('UTC'),
            ],
            [
                'username' => 'bestadvietnamese5',
                'email' => 'adcpro123@gmail.com',
                'password' => '$2a$10$sLA1tbDom5TwBRKLyhpYreEw6FEAUM4U74RtTXqK91cKjNbKShTFK', // password
                'email_verified_at' => now('UTC'),
            ],
            [
                'username' => 'spmaidinh',
                'email' => ' bestsupport123@gmail.com',
                'password' => '$2a$10$sLA1tbDom5TwBRKLyhpYreEw6FEAUM4U74RtTXqK91cKjNbKShTFK', // password
                'email_verified_at' => now('UTC'),
            ],
            [
                'username' => 'midpronob',
                'email' => 'yasuott7@gmail.com',
                'password' => '$2a$10$sLA1tbDom5TwBRKLyhpYreEw6FEAUM4U74RtTXqK91cKjNbKShTFK', // password
                'email_verified_at' => now('UTC'),
            ],
            [
                'username' => 'jungleoutlevel',
                'email' => 'leetieulong562@gmail.com',
                'password' => '$2a$10$sLA1tbDom5TwBRKLyhpYreEw6FEAUM4U74RtTXqK91cKjNbKShTFK', // password
                'email_verified_at' => now('UTC'),
            ],
            [
                'username' => 'hondacodon123',
                'email' => 'malphite000@gmail.com',
                'password' => '$2a$10$sLA1tbDom5TwBRKLyhpYreEw6FEAUM4U74RtTXqK91cKjNbKShTFK', // password
                'email_verified_at' => now('UTC'),
            ],
            [
                'username' => 'zoe1champ',
                'email' => 'zoelolicon123@gmail.com',
                'password' => '$2a$10$sLA1tbDom5TwBRKLyhpYreEw6FEAUM4U74RtTXqK91cKjNbKShTFK', // password
                'email_verified_at' => now('UTC'),
            ],

        ]);
    }
}
