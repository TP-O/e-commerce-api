<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ShopSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('shops')->insert([
            [
                'id' => 1,
                'slug' => 'shop-01',
                'name' => 'Shop of User 01',
                'description' => 'This is a shope of user 01.',
                'avatar_image' => 'demo-avatar-01',
                'cover_image' => 'demo-shop-cover-01',
                'banners' => json_encode([
                    [
                        'type' => 'video',
                        'source' => 'https://youtu.be/GxUxTtdkW2E'
                    ],
                    [
                        'type' => 'video',
                        'source' => 'https://youtu.be/S8_YwFLCh4U'
                    ],
                    [
                        'type' => 'image',
                        'id' => 'demo-shop-banner-01_01',
                        'hyper_link' => '',
                    ],
                ]),
            ],
            [
                'id' => 3,
                'slug' => 'blinkfyre',
                'name' => 'Blinkfyre',
                'description' => 'We believe that a high-quality product does not have to cost a bomb. We want to help consumers to access the best quality product at a reasonable price.\n⭐️ All products are ready stock in Singapore.\n⭐️ All orders will be shipped out on the next working day.\n⭐️ Delivery will take about 1 to 3 working days.\n⭐️ Working days: Monday to Saturday except Public Holidays.',
                'avatar_image' => 'demo-avatar-21',
                'cover_image' => 'demo-shop-cover-02',
                'banners' => json_encode([]),
            ],
            [
                'id' => 4,
                'slug' => 'ihouze',
                'name' => 'iHOUZE',
                'description' => '',
                'avatar_image' => 'demo-avatar-22',
                'cover_image' => 'demo-default-cover_tn',
                'banners' => json_encode([]),
            ],
            [
                'id' => 5,
                'slug' => 'kef-official-store',
                'name' => 'KEF Official Store',
                'description' => 'KEF’s mission is to deliver sound with as little intervention as possible; from treble to bass, and everything in between. Listeners should be able to close their eyes and immerse themselves in the sound so deeply that they are transported, in their minds, to the source. We believe that the best sound is natural sound – and that access to it is a right, not a privilege. Experience is everything, and that’s no overstatement. Combining our obsessions with acoustic authenticity and innovative engine',
                'avatar_image' => 'demo-avatar-23',
                'cover_image' => 'demo-shop-cover-04',
                'banners' => json_encode([
                    [
                        'type' => 'image',
                        'id' => 'demo-shop-banner-02',
                        'hyper_link' => '',
                    ],
                ]),
            ],
            [
                'id' => 6,
                'slug' => 'bagsworldsg',
                'name' => 'BAGSWORLDSG',
                'description' => '',
                'avatar_image' => null,
                'cover_image' => 'demo-default-cover_tn',
                'banners' => json_encode([]),
            ],
            [
                'id' => 7,
                'slug' => 'mobilerelation',
                'name' => 'MobileRelation',
                'description' => 'Your Trusted Online Store! Mobilerelation - Please contact us via shopee chat / Whatpps chat only as.\nWhatpps number (Chat Only)\n+6588055083.',
                'avatar_image' => 'demo-avatar-25',
                'cover_image' => 'demo-shop-cover-05',
                'banners' => json_encode([
                    [
                        'type' => 'image',
                        'id' => 'demo-shop-banner-03',
                        'hyper_link' => '',
                    ],
                ]),
            ],
            [
                'id' => 8,
                'slug' => 'blackdot-official-store',
                'name' => 'Blackdot Official Store',
                'description' => 'Blackdot Technologies, a Singapore-based electronic online store providing futuristic and unique model electronic products to customers.\nFor any inquiries include Blackdot products,\ndefects, and warranty services, please contact us.\n-Blackdot Team',
                'avatar_image' => 'demo-avatar-26',
                'cover_image' => 'demo-shop-cover-06',
                'banners' => json_encode([
                    [
                        'type' => 'image',
                        'id' => 'demo-shop-banner-04',
                        'hyper_link' => '',
                    ],
                ]),
            ],
            [
                'id' => 9,
                'slug' => 'autumn-tong-sg',
                'name' => 'AutumnTong.sg',
                'description' => '',
                'avatar_image' => 'demo-avatar-27',
                'cover_image' => 'demo-shop-cover-07',
                'banners' => json_encode([]),
            ],
            [
                'id' => 10,
                'slug' => 'aio-express',
                'name' => 'AIO EXPRESS',
                'description' => 'Welcome to our store!\nWe strive to provide the best shopping experience.\nFeel free to contact us for any enquiries.\nHope you enjoy shopping with us!',
                'avatar_image' => 'demo-avatar-28',
                'cover_image' => 'demo-default-cover_tn',
                'banners' => json_encode([]),
            ],
            [
                'id' => 11,
                'slug' => 'sleepee-store',
                'name' => 'Sleepee Store',
                'description' => 'Visit us at any of our outlets islandwide and test our mattress today:\n📍 𝗝𝘂𝗿𝗼𝗻𝗴 𝗢𝘂𝘁𝗹𝗲𝘁 (The Furniture Mall)\nLocation: 10 Toh Guan Road, #01-29 The Furniture Mall S(608838)\n✅ PK - 8250 4068 (English & Malay)\n✅ Annie - 8269 7642 (Chinese & Malay)\n⏰ Mon-Sat (From 11.30am-8pm) | Sun&PH (From 11.30am-7pm)\n-------\n📍 𝗨𝗯𝗶 𝗢𝘂𝘁𝗹𝗲𝘁 (𝗢𝘅𝗹𝗲𝘆 𝗕𝗶𝘇𝗛𝘂𝗯)\nLocation: 71 Ubi Road 1, #10-39 (Lobby 4) Oxley BizHub S(408732)\n✅ Samantha - 9001 9891 (Chinese & English)\n✅ Kelvin - 8750 0475 (English & Chinese)\n⏰ Mon-Sat (From 11am-8pm) | Sun&PH (From 11am-6pm)\n--------\n📍 𝗦𝗲𝗺𝗯𝗮𝘄𝗮𝗻𝗴 𝗢𝘂𝘁𝗹𝗲𝘁 / 𝗪𝗮𝗿𝗲𝗵𝗼𝘂𝘀𝗲 (𝗡𝗼𝗿𝘁𝗵 𝗟𝗶𝗻𝗸 𝗕𝘂𝗶𝗹𝗱𝗶𝗻𝗴)\nLocation: 10 Admiralty Street, #05-89 North Link Building S(757695)\n✅ Agnes - 8398 3878 (Chinese & Malay)\n✅ Joey - 8816 8562 (English & Malay)\n⏰ Mon-Sat (From 9am-6pm) | Sun&PH (From 11am-6pm)',
                'avatar_image' => 'demo-avatar-29',
                'cover_image' => 'demo-shop-cover-09',
                'banners' => json_encode([
                    [
                        'type' => 'image',
                        'id' => 'demo-shop-banner-05',
                        'hyper_link' => '',
                    ],
                ]),
            ],
            [
                'id' => 12,
                'slug' => 'novita-official-store',
                'name' => 'novita Official Store',
                'description' => '',
                'avatar_image' => 'demo-avatar-30',
                'cover_image' => 'demo-default-cover_tn',
                'banners' => json_encode([
                    [
                        'type' => 'video',
                        'source' => 'https://www.youtube.com/watch?v=PQW0rw6mvNY&t=4s&ab_channel=novitaSG'
                    ],
                    [
                        'type' => 'image',
                        'id' => 'demo-shop-banner-06',
                        'hyper_link' => '',
                    ],
                ]),
            ],

        ]);
    }
}
