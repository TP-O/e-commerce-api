<?php

namespace Database\Seeders;

use App\Enums\ProductStatus;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            [
                'shop_id' => 1,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => 'Samsung Galaxy A53 5G | A52s 5G (8GB+128GB/256GB) :D',
                'description' => 'Samsung A52s 5G Key Specs:\nDisplay : 6.5 inches (Super AMOLED,120Hz)\nCPU : Octa-core (4x2.4 GHz Kryo 670 & 4x1.9 GHz Kryo 670)\nMain Camera : 64MP + 12MP + 5MP + 5MP\nSelfie Camera : 32MP\nRAM : 8GB\nStorage : 128GB/256GB\nBattery Capacity : 4500 mAh (Fast Charging 25W)\n\nFor more details, please check at :\nhttps://www.samsung.com/sg/smartphones/galaxy-a/galaxy-a52s-5g-awesomemint-256gb-sm-a528blgixsp/\n\nSamsung A53 5G Key Specs :\nDisplay : 6.5 inches (Super AMOLED,120Hz)\nCPU : Octa-core (2x2.4 GHz Cortex-A78 & 6x2.0 GHz Cortex-A55)\nMain Camera : 64MP + 12MP + 5MP + 5MP\nSelfie Camera : 32MP\nRAM : 8GB\nStorage : 128GB/256GB\nBattery Capacity : 5000 mAh (Fast Charging 25W)\n\nFor more details,please check at\nhttps://www.samsung.com/sg/smartphones/galaxy-a/galaxy-a53-5g-awesome-blue-128gb-sm-a536elbgxsp/\n\n-All products are 100% authentic.\n-Local Singapore set.\n-All products are sourced from authorised dealers,official stores and telcos (M1,Singtel,Starhub & etc).\n-Some products are unsealed to check for manufacturer defect.\n-All products warranty based on manufactured date.\n-Some products might less than 1 year warranty due to activation policy from dealers or telcos.\n-If you wish to purchase Samsung Care+,please request by leave a message when placing order.\n-Telcos receipt or official dealers receipt will be provided if available.\n-Store soft copy receipt can be issue upon request.\n-For products that comes with manufacturer warranty,buyer must contact manufacturer or visit manufacturer’s service center for repair/exchange or any technical support.\n-All products sold are not exchangeable and not refundable.',
                'weight' => 500,
                'images' => json_encode([
                    'demo-93bc5fa42886e635fd9f103d03c9c31d',
                    'demo-6085df7be931e1ef9d79ce125cacdb8b',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'Colour',
                        'options' => [
                            'Awesome Black',
                            'Awesome White',
                        ]
                    ],
                    [
                        'name' => 'Model',
                        'options' => [
                            'A52s 8GB+128GB',
                            'A53 8GB+128GB',
                        ],
                    ],
                ]),
            ]
        ]);
    }
}
