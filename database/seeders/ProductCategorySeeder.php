<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product_categories')->insert([
            [
                'parent_id' => null,
                'name' => 'Clothes',
            ],
            [
                'parent_id' => 1,
                'name' => 'Jean',
            ],
            [
                'parent_id' => 1,
                'name' => 'Hoodies & Sweatshirts',
            ],
            [
                'parent_id' => 3,
                'name' => 'Hoodies',
            ],
            //5
            [
                'parent_id' => 3,
                'name' => 'Sweatshirts',
            ],
            [
                'parent_id' => 3,
                'name' => 'Other',
            ],
            [
                'parent_id' => 1,
                'name' => 'Sweaters & Cardigans',
            ],
            [
                'parent_id' => 1,
                'name' => 'Suits',
            ],
            [
                'parent_id' => 8,
                'name' => 'Suit Sets',
            ],
            //10
            [
                'parent_id' => 8,
                'name' => 'Suit Jackets & Blazers',
            ],
            [
                'parent_id' => 8,
                'name' => 'Suit Paints',
            ],
            [
                'parent_id' => 8,
                'name' => 'Suit Vests & Waistcoats',
            ],
            [
                'parent_id' => 1,
                'name' => 'Pants',
            ],
            [
                'parent_id' => 1,
                'name' => 'Shorts',
            ],
            //15
            [
                'parent_id' => 1,
                'name' => 'Innerwear & Underwear',
            ],
            [
                'parent_id' => 15,
                'name' => 'Underwear',
            ],
            [
                'parent_id' => 15,
                'name' => 'Undershirts',
            ],
            [
                'parent_id' => 15,
                'name' => 'Thermal Innerwear',
            ],
            [
                'parent_id' => null,
                'name' => 'Beauty',
            ],
            //20
            [
                'parent_id' => 19,
                'name' => 'Hand, Foot & Nail Care',
            ],
            [
                'parent_id' => 20,
                'name' => 'Hand Care',
            ],
            [
                'parent_id' => 20,
                'name' => 'Foot Care',
            ],
            [
                'parent_id' => 20,
                'name' => 'Nail Care',
            ],
            [
                'parent_id' => 19,
                'name' => 'Hair Care',
            ],
            //25
            [
                'parent_id' => 24,
                'name' => 'Shampoo',
            ],
            [
                'parent_id' => 24,
                'name' => 'Hair Color',
            ],
            [
                'parent_id' => 24,
                'name' => 'Hair Treatment',
            ],
            [
                'parent_id' => 24,
                'name' => 'Hair Styling',
            ],
            [
                'parent_id' => 19,
                'name' => 'Men\'s Care',
            ],
            //30
            [
                'parent_id' => 29,
                'name' => 'Bath & Body Care',
            ],
            [
                'parent_id' => 29,
                'name' => 'Skincare',
            ],
            [
                'parent_id' => 29,
                'name' => 'Hair Care',
            ],
            [
                'parent_id' => 19,
                'name' => 'Perfumes & Fragrance',
            ],
            [
                'parent_id' => 19,
                'name' => 'Makeup',
            ],
            //35
            [
                'parent_id' => 34,
                'name' => 'Other',
            ],
            [
                'parent_id' => 34,
                'name' => 'Face',
            ],
            [
                'parent_id' => 34,
                'name' => 'Eyes',
            ],
            [
                'parent_id' => 34,
                'name' => 'Lips',
            ],
            [
                'parent_id' => 34,
                'name' => 'Makeup Removers',
            ],
            //40
            [
                'parent_id' => 19,
                'name' => 'Beauty Tools',
            ],
            [
                'parent_id' => 40,
                'name' => 'Makeup Accessories',
            ],
            [
                'parent_id' => 40,
                'name' => 'Hair Removal Tools',
            ],
            [
                'parent_id' => 19,
                'name' => 'Skincare',
            ],
            [
                'parent_id' => 43,
                'name' => 'Facial Cleanser',
            ],
            //45
            [
                'parent_id' => 43,
                'name' => 'Toner',
            ],
            [
                'parent_id' => 43,
                'name' => 'Facial Oil',
            ],
            [
                'parent_id' => null,
                'name' => 'Health',
            ],
            [
                'parent_id' => 47,
                'name' => 'Food Supplement',
            ],
            [
                'parent_id' => 48,
                'name' => 'Weight Management',
            ],
            //50
            [
                'parent_id' => 48,
                'name' => 'Beauty Supplement',
            ],
            [
                'parent_id' => 48,
                'name' => 'Fitness',
            ],
            [
                'parent_id' => 47,
                'name' => 'Medical Supplies',
            ],
            [
                'parent_id' => 52,
                'name' => 'Health Monitors & Tests',
            ],
            [
                'parent_id' => 52,
                'name' => 'Scale & Body Fat Analyzers',
            ],
            //55
            [
                'parent_id' => 47,
                'name' => 'Personal Care',
            ],
            [
                'parent_id' => 55,
                'name' => 'Eye Care',
            ],
            [
                'parent_id' => 55,
                'name' => 'Ear Care',
            ],
            [
                'parent_id' => 55,
                'name' => 'Oral Care',
            ],
            [
                'parent_id' => 47,
                'name' => 'Other',
            ],
            //60
            [
                'parent_id' => null,
                'name' => 'Home Appliances',
            ],
            [
                'parent_id' => 60,
                'name' => 'TVs & Accessories',
            ],
            [
                'parent_id' => 61,
                'name' => 'TVs',
            ],
            [
                'parent_id' => 61,
                'name' => 'TV Antennas',
            ],
            [
                'parent_id' => 61,
                'name' => 'TV Brackets',
            ],
            //65
            [
                'parent_id' => 60,
                'name' => 'Kitchen Appliances',
            ],
            [
                'parent_id' => 65,
                'name' => 'Kettles',
            ],
            [
                'parent_id' => 65,
                'name' => 'Wine Fridges',
            ],
            [
                'parent_id' => 65,
                'name' => 'Coffee Machine & Accessories',
            ],
            [
                'parent_id' => 65,
                'name' => 'Mixers',
            ],
            //70
            [
                'parent_id' => 60,
                'name' => 'Batteries',
            ],
            [
                'parent_id' => 60,
                'name' => 'Remote Controls',
            ],
            [
                'parent_id' => null,
                'name' => 'Mobile & Gadgets',
            ],
            [
                'parent_id' => 72,
                'name' => 'Sim Cards',
            ],
            [
                'parent_id' => 72,
                'name' => 'Tablets',
            ],
            //75
            [
                'parent_id' => 72,
                'name' => 'Mobiles Phones',
            ],
            [
                'parent_id' => 72,
                'name' => 'Wearable Devices',
            ],
            [
                'parent_id' => 76,
                'name' => 'VR Devices',
            ],
            [
                'parent_id' => 76,
                'name' => 'GPS Trackers',
            ],
            [
                'parent_id' => 72,
                'name' => 'Accessories',
            ],
            //80
            [
                'parent_id' => 79,
                'name' => 'Mobile Flashes & Selfie Lights',
            ],
            [
                'parent_id' => 79,
                'name' => 'USB & Mobile Fans',
            ],
            [
                'parent_id' => 79,
                'name' => 'Phone Grips',
            ],
            [
                'parent_id' => 79,
                'name' => 'Memory Card',
            ],
            [
                'parent_id' => 79,
                'name' => 'Screen Protector',
            ],
            //85
            [
                'parent_id' => null,
                'name' => 'Audio',
            ],
            [
                'parent_id' => 85,
                'name' => 'EarPhones, Headphones & Headsets',
            ],
            [
                'parent_id' => 85,
                'name' => 'Media Player',
            ],
            [
                'parent_id' => 87,
                'name' => 'MP3 & MP4 Players',
            ],
            [
                'parent_id' => 87,
                'name' => 'CD, DVD, & Blu-ray Players',
            ],
            //90
            [
                'parent_id' => 87,
                'name' => 'Voice Recorders',
            ],
            [
                'parent_id' => 87,
                'name' => 'Radio & Cassette Players',
            ],
            [
                'parent_id' => 85,
                'name' => 'Microphone',
            ],
            [
                'parent_id' => 85,
                'name' => 'Amplifiers & Mixers',
            ],
            [
                'parent_id' => 85,
                'name' => 'Home Audio & Speakers',
            ],
            //95
            [
                'parent_id' => 94,
                'name' => 'Speakers',
            ],
            [
                'parent_id' => 94,
                'name' => 'AV Receivers',
            ],
            [
                'parent_id' => null,
                'name' => 'Pets',
            ],
            [
                'parent_id' => 97,
                'name' => 'Pet Food',
            ],
            [
                'parent_id' => 98,
                'name' => 'Dog Food',
            ],
            //100
            [
                'parent_id' => 98,
                'name' => 'Cat Food',
            ],
            [
                'parent_id' => 98,
                'name' => 'Bird feed',
            ],
            [
                'parent_id' => 97,
                'name' => 'Pet Accessories',
            ],
            [
                'parent_id' => 102,
                'name' => 'Bowls & Feeders',
            ],
            [
                'parent_id' => 102,
                'name' => 'Leashes, Collars & Harnesses',
            ],
            //105
            [
                'parent_id' => 97,
                'name' => 'Pet Clothing & Accessories',
            ],
            [
                'parent_id' => 105,
                'name' => 'Pet Clothing',
            ],
            [
                'parent_id' => 105,
                'name' => 'Boots, Socks & Paw Protectors',
            ],
            [
                'parent_id' => 105,
                'name' => 'Hats',
            ],
            [
                'parent_id' => null,
                'name' => 'Gaming & Consoles',
            ],
            //110
            [
                'parent_id' => 109,
                'name' => 'Console Machines',
            ],
            [
                'parent_id' => 110,
                'name' => 'Playstation',
            ],
            [
                'parent_id' => 110,
                'name' => 'Xbox',
            ],
            [
                'parent_id' => 110,
                'name' => 'Nintendo DS',
            ],
            [
                'parent_id' => 109,
                'name' => 'Console Accessories',
            ],
            //115
            [
                'parent_id' => 109,
                'name' => 'Video Games',
            ],
            [
                'parent_id' => 115,
                'name' => 'Playstation',
            ],
            [
                'parent_id' => 115,
                'name' => 'Xbox',
            ],
            [
                'parent_id' => 115,
                'name' => 'Nintendo DS',
            ],
            [
                'parent_id' => 115,
                'name' => 'PC Game',
            ],
            //120
            [
                'parent_id' => null,
                'name' => 'Stationery',
            ],
            [
                'parent_id' => 120,
                'name' => 'Writing & Correction',
            ],
            [
                'parent_id' => 121,
                'name' => 'Pens & Inks',
            ],
            [
                'parent_id' => 121,
                'name' => 'Pencils',
            ],
            [
                'parent_id' => 121,
                'name' => 'Eraser & Correction Supplies',
            ],
            //125
            [
                'parent_id' => 121,
                'name' => 'Highlighters',
            ],
            [
                'parent_id' => 120,
                'name' => 'School & Office Equipment',
            ],
            [
                'parent_id' => 126,
                'name' => 'Calculator',
            ],
            [
                'parent_id' => 126,
                'name' => 'Clips, Pins & Tasks',
            ],
            [
                'parent_id' => 126,
                'name' => 'Rulers, Protractors & Stencils',
            ],
            //130
            [
                'parent_id' => 120,
                'name' => 'Notebooks & Papers',
            ],
            [
                'parent_id' => 130,
                'name' => 'Bookmarks',
            ],
            [
                'parent_id' => 130,
                'name' => 'Printing & Photocopy Paper',
            ],
            [
                'parent_id' => 130,
                'name' => 'Memo & Sticky Notes',
            ],
            [
                'parent_id' => null,
                'name' => 'Computers & Accessories',
            ],
            //135
            [
                'parent_id' => 134,
                'name' => 'Desktop Computers',
            ],
            [
                'parent_id' => 135,
                'name' => 'Desktop PC',
            ],
            [
                'parent_id' => 135,
                'name' => 'Mini PC',
            ],
            [
                'parent_id' => 135,
                'name' => 'Server PC',
            ],
            [
                'parent_id' => 134,
                'name' => 'Monitors',
            ],
            //140
            [
                'parent_id' => 134,
                'name' => 'Desktop & Laptop Components',
            ],
            [
                'parent_id' => 140,
                'name' => 'Fans & Heatsinks',
            ],
            [
                'parent_id' => 140,
                'name' => 'Processors',
            ],
            [
                'parent_id' => 140,
                'name' => 'Graphics Cards',
            ],
            [
                'parent_id' => 140,
                'name' => 'RAM',
            ],
            //145
            [
                'parent_id' => 140,
                'name' => 'PC Cases',
            ],
            [
                'parent_id' => 134,
                'name' => 'Data Storage',
            ],
            [
                'parent_id' => 146,
                'name' => 'Hard Drives',
            ],
            [
                'parent_id' => 146,
                'name' => 'SSD',
            ],
            [
                'parent_id' => 146,
                'name' => 'Hard Disk Casing & Docking',
            ],
            //150
            [
                'parent_id' => 134,
                'name' => 'Keyboards & Mice',
            ],
            [
                'parent_id' => 150,
                'name' => 'Mice',
            ],
            [
                'parent_id' => 150,
                'name' => 'Keyboards',
            ],
            [
                'parent_id' => 134,
                'name' => 'Laptops',
            ],
        ]);
    }
}
