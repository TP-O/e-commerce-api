<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductCategoryAttributeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product_category_attributes')->insert([
            [
                'name' => 'Material',
                'units' => '[]',
            ],
            [
                'name' => 'Style',
                'units' => '[]',
            ],
            [
                'name' => 'Country of Origin',
                'units' => '[]',
            ],
            [
                'name' => 'Season',
                'units' => '[]',
            ],
            //5
            [
                'name' => 'Suit Style',
                'units' => '[]',
            ],
            [
                'name' => 'Vent Style',
                'units' => '[]',
            ],
            [
                'name' => 'Collar Type',
                'units' => '[]',
            ],
            [
                'name' => 'Bottoms Length',
                'units' => '[]',
            ],
            [
                'name' => 'Waist Height',
                'units' => '[]',
            ],
            //10
            [
                'name' => 'Shorts Type',
                'units' => '[]',
            ],
            [
                'name' => 'Underwear Type',
                'units' => '[]',
            ],
            [
                'name' => 'Neckline',
                'units' => '[]',
            ],
            [
                'name' => 'Volume',
                'units' => '["ml", "L"]',
            ],
            [
                'name' => 'Weight',
                'units' => '["g", "kg"]',
            ],
            //15
            [
                'name' => 'Ingredient',
                'units' => '[]',
            ],
            [
                'name' => 'Formulation',
                'units' => '[]',
            ],
            [
                'name' => 'Body Care Benefits',
                'units' => '[]',
            ],
            [
                'name' => 'Ingredient Preference',
                'units' => '[]',
            ],
            [
                'name' => 'Hair Care Benefits',
                'units' => '[]',
            ],
            //20
            [
                'name' => 'Scent',
                'units' => '[]',
            ],
            [
                'name' => 'Gender',
                'units' => '[]',
            ],
            [
                'name' => 'Fragrance Concentration',
                'units' => '[]',
            ],
            [
                'name' => 'Lip Benefits',
                'units' => '[]',
            ],
            [
                'name' => 'Application Area',
                'units' => '[]',
            ],
            //25
            [
                'name' => 'Skin Type',
                'units' => '[]',
            ],
            [
                'name' => 'Makeup Remover Type',
                'units' => '[]',
            ],
            [
                'name' => 'Warranty Type',
                'units' => '[]',
            ],
            [
                'name' => 'Power Source',
                'units' => '[]',
            ],
            [
                'name' => 'Tool Function',
                'units' => '[]',
            ],
            //30
            [
                'name' => 'Skin Care Benefits',
                'units' => '[]',
            ],
            [
                'name' => 'Cleanser Type',
                'units' => '[]',
            ],
            [
                'name' => 'Skin Type',
                'units' => '[]',
            ],
            [
                'name' => 'Nutrient Type',
                'units' => '[]',
            ],
            [
                'name' => 'Food Type',
                'units' => '[]',
            ],
            //35
            [
                'name' => 'Specialty Diet',
                'units' => '[]',
            ],
            [
                'name' => 'Serial',
                'units' => '[]',
            ],
            [
                'name' => 'Warranty Duration',
                'units' => '[]',
            ],
            [
                'name' => 'Circulation number',
                'units' => '[]',
            ],
            [
                'name' => 'Scale & Body Fat Analyzers Type',
                'units' => '[]',
            ],
            //40
            [
                'name' => 'Smart TV',
                'units' => '[]',
            ],
            [
                'name' => 'Resolution',
                'units' => '[]',
            ],
            [
                'name' => 'TV Type',
                'units' => '[]',
            ],
            [
                'name' => 'Dimension (L x W x H)',
                'units' => '[]',
            ],
            [
                'name' => 'TV Screen Size',
                'units' => '[]',
            ],
            //45
            [
                'name' => 'TV Port Input',
                'units' => '[]',
            ],
            [
                'name' => 'Antenna Type',
                'units' => '[]',
            ],
            [
                'name' => 'Coffee Machine Capacity',
                'units' => '[]',
            ],
            [
                'name' => 'Coffee Machine Type',
                'units' => '[]',
            ],
            [
                'name' => 'Mixer Type',
                'units' => '[]',
            ],
            //50
            [
                'name' => 'Mixer Features',
                'units' => '[]',
            ],
            [
                'name' => 'Battery Size',
                'units' => '[]',
            ],
            [
                'name' => 'Battery Capacity',
                'units' => '["mAh", "cell", "Wh"]',
            ],
            [
                'name' => 'Sim Card Region',
                'units' => '[]',
            ],
            [
                'name' => 'SIM Type',
                'units' => '[]',
            ],
            //55
            [
                'name' => 'Storage Capacity',
                'units' => '["GB", "TB"]',
            ],
            [
                'name' => 'Mobile Cable Type',
                'units' => '[]',
            ],
            [
                'name' => 'Tablet Model',
                'units' => '[]',
            ],
            [
                'name' => 'Screen Size',
                'units' => '["inches"]',
            ],
            [
                'name' => 'Primary Camera Resolution',
                'units' => '["MP"]',
            ],
            //60
            [
                'name' => 'Condition',
                'units' => '[]',
            ],
            [
                'name' => 'RAM',
                'units' => '["GB"]',
            ],
            [
                'name' => 'Phone Type',
                'units' => '[]',
            ],
            [
                'name' => 'Supported Operating System',
                'units' => '[]',
            ],
            [
                'name' => 'Number of Primary Cameras',
                'units' => '[]',
            ],
            //65
            [
                'name' => 'Processor Type',
                'units' => '[]',
            ],
            [
                'name' => 'Phone Model',
                'units' => '[]',
            ],
            [
                'name' => 'Number of SIM Card Slots',
                'units' => '[]',
            ],
            [
                'name' => 'VR Features',
                'units' => '[]',
            ],
            [
                'name' => 'Memory Card Type',
                'units' => '[]',
            ],
            //70
            [
                'name' => 'Screen Protector Type',
                'units' => '[]',
            ],
            [
                'name' => 'Applicable Mobile Brand',
                'units' => '[]',
            ],
            [
                'name' => 'Screen Protector Material',
                'units' => '[]',
            ],
            [
                'name' => 'Connection Type',
                'units' => '[]',
            ],
            [
                'name' => 'Audio Compatibility',
                'units' => '[]',
            ],
            //75
            [
                'name' => 'Input Connectivity',
                'units' => '[]',
            ],
            [
                'name' => 'Microphone Connectivity',
                'units' => '[]',
            ],
            [
                'name' => 'Microphone Type',
                'units' => '[]',
            ],
            [
                'name' => 'Amplifier Type',
                'units' => '[]',
            ],
            [
                'name' => 'Dog Size',
                'units' => '[]',
            ],
            //80
            [
                'name' => 'Bird Food Type',
                'units' => '[]',
            ],
            [
                'name' => 'Volume Capacity',
                'units' => '["L", "ml"]',
            ],
            [
                'name' => 'Pet Weight',
                'units' => '[]',
            ],
            [
                'name' => 'Pet Type',
                'units' => '[]',
            ],
            [
                'name' => 'Playstation Model',
                'units' => '[]',
            ],
            //85
            [
                'name' => 'HDD Size',
                'units' => '["gb"]',
            ],
            [
                'name' => 'Xbox Model',
                'units' => '[]',
            ],
            [
                'name' => 'Nintendo DS Model',
                'units' => '[]',
            ],
            [
                'name' => 'Connection',
                'units' => '[]',
            ],
            [
                'name' => 'Platform Compatibility',
                'units' => '[]',
            ],
            //90
            [
                'name' => 'Accessory Type',
                'units' => '[]',
            ],
            [
                'name' => 'Game Genre',
                'units' => '[]',
            ],
            [
                'name' => 'Game Genre Type',
                'units' => '[]',
            ],
            [
                'name' => 'Line Weight',
                'units' => '["mm"]',
            ],
            [
                'name' => 'Ink Type',
                'units' => '[]',
            ],
            //95
            [
                'name' => 'Pen Type',
                'units' => '[]',
            ],
            [
                'name' => 'Lead Type',
                'units' => '[]',
            ],
            [
                'name' => 'Pencil Type',
                'units' => '[]',
            ],
            [
                'name' => 'Correction Type',
                'units' => '[]',
            ],
            [
                'name' => 'Calculator Type',
                'units' => '[]',
            ],
            //100
            [
                'name' => 'Clips, Pins & Tacks Type',
                'units' => '[]',
            ],
            [
                'name' => 'Length',
                'units' => '["m", "cm", "inches", "feet"]',
            ],
            [
                'name' => 'Width',
                'units' => '["m", "cm", "inches"]',
            ],
            [
                'name' => 'Paper Size',
                'units' => '[]',
            ],
            [
                'name' => 'Paper Grammage',
                'units' => '["gsm"]',
            ],
            //105
            [
                'name' => 'Number of Sheets',
                'units' => '[]',
            ],
            [
                'name' => 'Storage Type',
                'units' => '[]',
            ],
            [
                'name' => 'Ports/ Interface',
                'units' => '[]',
            ],
            [
                'name' => 'Gaming Focused',
                'units' => '[]',
            ],
            [
                'name' => 'Operating System',
                'units' => '[]',
            ],
            //110
            [
                'name' => 'CPU Frequency',
                'units' => '["Ghz"]',
            ],
            [
                'name' => 'Number of Cores',
                'units' => '[]',
            ],
            [
                'name' => 'Monitor Interface Type',
                'units' => '[]',
            ],
            [
                'name' => 'Monitor Response Time',
                'units' => '["ms"]',
            ],
            [
                'name' => 'Monitor Screen Size',
                'units' => '[]',
            ],
            //115
            [
                'name' => 'Panel Type',
                'units' => '[]',
            ],
            [
                'name' => 'Fan RGB Lighting',
                'units' => '[]',
            ],
            [
                'name' => 'CPU Socket Type',
                'units' => '[]',
            ],
            [
                'name' => 'Core Clock Speed',
                'units' => '["MHz"]',
            ],
            [
                'name' => 'Graphics Chipset Manufacturer',
                'units' => '[]',
            ],
            //120
            [
                'name' => 'Graphics Card Model',
                'units' => '[]',
            ],
            [
                'name' => 'Video Memory Type',
                'units' => '[]',
            ],
            [
                'name' => 'Graphics Memory',
                'units' => '["GB"]',
            ],
            [
                'name' => 'Memory Clock Speed',
                'units' => '["MHz"]',
            ],
            [
                'name' => 'Memory Type',
                'units' => '[]',
            ],
            //125
            [
                'name' => 'Form Factor',
                'units' => '[]',
            ],
            [
                'name' => 'PC Cases Chassis Structure',
                'units' => '[]',
            ],
            [
                'name' => 'Internal/External',
                'units' => '[]',
            ],
            [
                'name' => 'Rotation Speed',
                'units' => '["rpm"]',
            ],
            [
                'name' => 'SSD Form Factor',
                'units' => '[]',
            ],
            //130
            [
                'name' => 'Hard Disk Casing Size',
                'units' => '["inches"]',
            ],
            [
                'name' => 'Keyboard & Mouse Model',
                'units' => '[]',
            ],
            [
                'name' => 'Keyboard Key Type',
                'units' => '[]',
            ],
            [
                'name' => 'Laptop Model',
                'units' => '[]',
            ],
            [
                'name' => 'Laptop Screen Size',
                'units' => '[]',
            ],
            //135
            [
                'name' => 'Laptop Type',
                'units' => '[]',
            ],
        ]);
    }
}
