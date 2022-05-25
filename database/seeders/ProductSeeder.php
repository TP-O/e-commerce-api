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
                'name' => 'Samsung Galaxy A53 5G | A52s 5G (8GB+128GB/256GB) with 1 Year Warranty by Samsung',
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
            ],
            [
                'shop_id' => 3,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => '【SG】 PBT Dye Sublimation Keycap Set (108 Keys) - OEM Profile',
                'description' => 'Local SG Seller – Fast Delivery – Buy with Confidence!\nNote: Keycaps only, keyboard not included.\nTransform your bland and boring keyboard into an Instagram-worthy one! These keycap sets are truly special. Guaranteed to bring your keyboard and setup to life with its vibrant color scheme and radiant colors.\n【COMPATIBILITY】\nFits most mechanical keyboards and optical keyboards that use Cherry MX switches or Cherry-like switches such as Gateron, Kailh, Outemu, and more.\n【PBT Dye-Sub】\nThis set of keycaps is made of high-quality PBT materials, and the thickness is about 1.5 mm, which is very durable. In addition, dye-sublimation technology is used to print fonts and exquisite patterns on the keycaps. These fonts and patterns are very clear and not easy to fall off.\n【OEM PROFILE】\nThe most popular OEM profile keycaps have sculpted shapes that conform to your fingertips to increase comfort during typing or gaming.\n【Keyboard Layout】\nCompatible with 61/87/104 keys standard US/ANSI mechanical keyboard whose spacebar is 6.25u (around 11.7cm), and 1.25u bottom modifier keys. This keycap set is not compatible with 64/68/71/72/82/84 keys mechanical keyboard layout. This is also not compatible with non-standard bottom row layouts such as Razer Huntsman Elite (6.0u spacebar) or Corsair K70/Logitech G710+ (6.5u spacebar).\n【Specification】\nMaterial: PBT\nThickness: ~1.5 mm\nLegend: Dye Sublimation\nBacklit: No\nLayout: US/ANSI 108 keys\nProfile: OEM Profile\nSakura - 113 keys (OEM Profile)\nChinese Ink - 113 keys (OEM Profile)\nTang Dynasty - 113 keys (OEM Profile)\nFamicom - 108 keys (OEM Profile)\nNintendo (NES) - 108 keys (OEM Profile)\nMatcha - 108 keys (OEM Profile)\nPirate - 108 keys (OEM Profile)\nHana - 108 keys (OEM Profile)',
                'weight' => 500,
                'images' => json_encode([
                    'demo-31bdac4679edf9ebf483e86461c024ad',
                    'demo-ecf68a0e351256c3589211483005f9ac',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'Theme',
                        'options' => [
                            'Matcha',
                            'Hana',
                        ],
                    ],
                ]),
            ],

            [
                'shop_id' => 3,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => '【SG】 Gateron KS-9 Mechanical Keyboard Switch',
                'description' => 'Local SG Seller – Fast Delivery – Buy with Confidence!\nNote: Not compatible with Outemu hot-swap PCB (e.g. Tecware Phantom RGB), as it has a narrower socket that only accept Outemu switches.\nMinimum order 30 pcs, can mix and match.\nContact us if you would like to have switch tester kit with 9 type of Gateron switches.\n【Gateron White Switch】\nType: Linear\nActuation Force: 35 gf\nActuation Distance: 2.0 mm\nTravel Distance: 4.0 mm\nDescription: The white switch has the lightest actuation force amongst the linear switches. The smooth nature of the Gateron allows it to be triggered with very light force, making it effortless to type.\n【Gateron Red Switch】\nType: Linear\nActuation Force: 45 gf\nActuation Distance: 2.0 mm\nTravel Distance: 4.0 mm\nDescription: Gateron red is the most commonly used Gateron switch because it is a linear switch, making the typing sound quieter. The pressure is more moderate, light, and prolonged periods of typing will not feel tired.\n【Gateron Yellow Switch】\nType: Linear\nActuation Force: 50 gf\nActuation Distance: 2.0 mm\nTravel Distance: 4.0 mm\nDescription: The design of the Gateron yellow switch is the same as the red switch, but the departure strength is 5g bigger, which seems small but does offer a difference in feeling. The feedback of the yellow switch is more rigid, but it doesn’t need heavy force to be triggered.\n【Gateron Black Switch】\nType: Linear\nActuation Force: 60 gf\nActuation Distance: 2.0 mm\nTravel Distance: 4.0 mm\nDescription: The black switch is a linear switch with the greatest strength amongst standard mass-produced switches. Those who like mechanical keyboards with a stronger trigger force will likely prefer the Gateron black switch.\n【Gateron Brown Switch】\nType: Tactile\nActuation Force: 55 gf\nActuation Distance: 2.0 mm\nTravel Distance: 4.0 mm\nDescription: Gateron brown switch has the characteristics of both the red and blue switches. The vertical press still feels smooth, but also has the feeling of a bump. The sound is relatively quiet and will not disturb the surrounding environment.\n【Gateron Blue Switch】\nType: Clicky\nActuation Force: 60 gf\nActuation Distance: 2.3 mm\nTravel Distance: 4.0 mm\nDescription: Gateron Blue has a unique clicky touch feel and a louder sound. It still has the characteristics of the Gateron Switch and is smooth with tactile feedback. This structure can let you type for a long period and not get tired. It’s ideal for games and typing.\n【Gateron Green Switch】\nType: Clicky\nActuation Force: 80 gf\nActuation Distance: 2.3 mm\nTravel Distance: 4.0 mm\nDescription: Gateron Green switch is seen by many as an upgraded version of Gateron Blue switch. 80g of press force is 20g higher than the Blue switch. The green switch has stronger feedback and a harder rebound.',
                'weight' => 50,
                'images' => json_encode([
                    'demo-4cc279abec8e74f480bc3968989be311',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'Switch Type',
                        'options' => [
                            'Gateron White',
                            'Gateron Red',
                        ],
                    ],
                ]),
            ],

            [
                'shop_id' => 4,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => '[✅SG Ready Stock] 🔥 Premium Foldable Baby High Chair/ Feeding Chair/ Low Chair/ Adjustable Infant Toddlers Dining Seat',
                'description' => 'Feature\n1) Washable Food Tray Only\n2) Washable PU Leather Seat Cover Only\n3) Chair Colour ( Pink / Blue / Grey ) + Food Tray + Seat Cover + Wheel\n4) Foldable for Space Saving\n🌟Product Highlights🌟\n🆓🆓 Washable PU Leather Seat Cover\n🆓🆓 Washable Dining Food Tray\n🆓🆓 Multi-range Adjustment\n✅ Adjustable Height\n✅ Lightweight, Foldable & Portable\n✅ Adjustable Safety belt included\n✅ Suitable age start from 6 month to 5 years\n✅ Sustain for baby weight up to 25kg\n✅ Multipurpose adjustable dining chair\n✅ Light weight for easy carrying\n✅ Premium Material Surface - Easy to wipe clean\n#haby #highchair # multifunction #foodtray #adjustable #safety #Premium #Baby #Singapore #Local',
                'weight' => 2500,
                'images' => json_encode([
                    'demo-5d428c67197abda913f95b5e29da189f',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'Colour',
                        'options' => [
                            'Blue',
                            'Pink',
                        ],
                    ],
                ]),
            ],

            [
                'shop_id' => 4,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => '[✅SG Ready Stock] 🔥 60/80/100x40/50cm Nordic Study Table Laptop Home Office Desks Computer Modern Writing Table',
                'description' => '60/80x40cm Nordic Study Table Laptop Home Office Desks Computer Modern Writing Table\n★★ 𝗪𝗔𝗥𝗠 𝗥𝗘𝗠𝗜𝗡𝗗𝗘𝗥 ★★\n💢 1 Table = 1 Order Only 😊\n💢 2 Table  = Need 2 Orders 😊\n💢 Please don’t combine with other products 😊\n** Please take note before place order **\n***** Please Separate The Order *****\nIf You Need To Buy More Than One Item, Please Purchase One Item Each Order TQ\n1 Table = 1 Order Only\n1 Item = 1 Order\n10 Table = Need 10 Order',
                'weight' => 7000,
                'images' => json_encode([
                    'demo-6462d797d526c25510abe38442fc21d2',
                    'demo-eaa6b336a5cb84383b6f991f32b89256',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'Size',
                        'options' => [
                            '60x40cm Curve White',
                            '60x40cm Curve Maple',
                        ]
                    ],
                ]),
            ],
            //5
            [
                'shop_id' => 5,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => 'KEF Lsx P1 Desk Pad',
                'description' => '• 1/4" screw mounting for use with LSX\n• Aluminium construction for rigidity and stability\n• 100 upwards tilt\n• Available finished: Black / Silver',
                'weight' => 1000,
                'images' => json_encode([
                    'demo-5f463dba65c0185d9dae94c0d019c902',
                    'demo-6c5485a694fff40b1e55265f68f6d9ba',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'Colour',
                        'options' => [
                            'Black',
                            'Silver',
                        ]
                    ],
                ]),
            ],

            [
                'shop_id' => 5,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => 'KEF KC62 SUBWOOFER',
                'description' => 'KC62 is an incredibly compact subwoofer that delivers the might and magic of deep, accurate bass for a thrillingly immersive music, movie and gaming experience. Created using innovative KEF engineering including the ground-breaking Uni-Core™ technology, the football-sized KC62 features two 6.5inch force cancelling drive units powered by 1,000W RMS of specially designed Class D amplification.KC62 is an incredibly compact subwoofer that delivers the might and magic of deep, accurate bass for a thrillingly immersive music, movie and gaming experience. Created using innovative KEF engineering including the ground-breaking Uni-Core™ technology, the football-sized KC62 features two 6.5inch force cancelling drive units powered by 1,000W RMS of specially designed Class D amplification.',
                'weight' => 2000,
                'images' => json_encode([
                    'demo-e7ee45724c72734c0303b25137d8c4d6',
                    'demo-347cb1e930a2ed5e08edac1aa0e70e07',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'Colour',
                        'options' => [
                            'Black',
                            'White',
                        ]
                    ],
                ]),
            ],
//
            [
                'shop_id' => 6,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => 'SG M330 ultra silent Black wireless gaming working work ergonomic mouse mice accessories',
                'description' => 'Meet M330 Silent Plus\nGet all your work done without missing a beat or disturbing people around you. Silent Mice have the same click feel without the click noise—over 90 percent noise reduction.* Say hello to the silent one in the room and goodbye to your last annoying click. Your family and friends will thank you\nM330 Black wireless gaming working work ergonomic mouse mice accessories\naccessories mice wireless mouse wireless gaming mice computer mouse ergonomic mouse wireless bluetooth wireless gaming mouse wireless mouse',
                'weight' => 700,
                'images' => json_encode([
                    'demo-7c311a63d50279bbce830f1eb219d501',
                    'demo-b8183953f66801b0b6fd0ffdddf07872',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'Colour',
                        'options' => [
                            'Black M330',
                            'White M330',
                        ]
                    ],
                    [
                        'name' => 'Quantity',
                        'options' => [
                            '1 Pack',
                            '2 Packs',
                        ]
                    ],
                ]),
            ],

            [
                'shop_id' => 6,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => 'Local SG 2.4GH silent Wireless Mouse wireless Gaming Mouse mice Rechargeable mouse Gaming Mice Silent LED Wireless Mouse',
                'description' => '2.4GHz Wireless Gaming Mouse Optical Rechargeable Gaming Mice Silent LED Backlit Ergonomics E-Sport Wireless Mouse\nSpecifications:\nBrand: FREE WOLF\nModel: X8\nColor: Black, White, Gray, Star Black\nWireless distance: 10 meters\nKey life: 20 million times\nPower: Built-in Rechargeable 600mAh lithium battery\nResponse speed: 150PS\nWireless technology: 2.4GHz\nVoltage and current: 3,7V-18MA\nCharacteristics of light effect: Phantom seven color breathing\nNumber of keys: 6 keys\nOptical resolution: 1800DPI\nDPI switching: 800/1600/2400 3 modes\nErgonomics: support\nSystem requirements: Windows10 Windows XP, Vista, Win 7, Win 8, ME,2000 and Mac OS...or latest\nProduct size: approx.138X80X38mm\nProduct weight: approx.120g\nLocal SG 2.4GHz silent Wireless Mouse wireless Gaming Mouse mice Rechargeable mouse Gaming Mice Silent LED Wireless Mouse\naccessories mice wireless mouse wireless gaming mice computer mouse ergonomic mouse wireless bluetooth wireless gaming mouse wireless mouse silent rechargable blue tooth mouse',
                'weight' => 120,
                'images' => json_encode([
                    'demo-613ab8657862f6d133e450288c9d1ad5',
                    'demo-146c64c60f2bbe68a4bfa93a1f590545',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'Colour',
                        'options' => [
                            'Black',
                            'White',
                        ]
                    ],
                    [
                        'name' => 'Quantity',
                        'options' => [
                            '1 Pack',
                            '2 Packs',
                        ]
                    ],
                ]),
            ],

            [
                'shop_id' => 7,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => 'Samsung A13 | A12 A127 1 year Samsung warranty',
                'description' => 'Samsung A12 (A127) Key Specs:\nDisplay: 6.5-inch\nFront Camera:8MP\nRAM:4GB\nStorage:128GB\nBattery Capacity:5000mAh\nFor more details, please check at https://www.samsung.com/sg/smartphones/galaxy-a/galaxy-a12-black-128gb-sm-a127fzkhxsp/#benefits\nSamsung A13 Key Specs:\nDisplay: 6.6-inch\nFront Camera: 8MP\nRear Camera: 50MP + 5MP + 2MP + 2MP\nRAM: 4GB\nStorage: 128GB\nBattery Capacity: 5000mAh\nFor more details, please check at https://www.samsung.com/sg/smartphones/galaxy-a/galaxy-a13-light-blue-128gb-sm-a135flbhxsp/\n-All products are 100% authentic.\n-Local Singapore set.\n-All products are sourced from authorised dealers,official stores and telcos (M1,Singtel,Starhub & etc).\n-Some products are unsealed to check for manufacturer defect.\n-All products warranty based on manufactured date.\n-Some products might less than 1 year warranty due to activation policy from dealers or telcos.\n-If you wish to purchase Samsung Care+,please request by leave a message when placing order.\n-Telcos receipt or official dealers receipt will be provided if available.\n-Store soft copy receipt can be issue upon request.\n-For products that comes with manufacturer warranty,buyer must contact manufacturer or visit manufacturer’s service center for repair/exchange or any technical support.\n-All products sold are not exchangeable and not refundable.',
                'weight' => 700,
                'images' => json_encode([
                    'demo-5b6aa99b33de3fb0492ca32aae1e8e16',
                    'demo-f8271c808c2d51c8183b0854526c179f',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'Model',
                        'options' => [
                            'A12 Cosmic Black',
                            'A12 Cosmic Blue',
                        ]
                    ],
                ]),
            ],
            //10
            [
                'shop_id' => 7,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => 'SAMSUNG GALAXY A33 | A32 5G (4GB /8GB +128GB) 1 Year warranty by samsung',
                'description' => 'Samsung A33 5G Key Specs:\nDisplay: 6.4-inch Super AMOLED (90Hz)\nFront Camera: 13MP\nRear Camera: 48MP + 8MP + 5MP + 2MP\nRAM: 8GB\nStorage: 128GB\nNFC: Yes\nBattery Capacity: 5000mAh (Fast Charging 25W)\nFor more details, please check at\nhttps://www.samsung.com/sg/smartphones/galaxy-a/galaxy-a33-5g-awesome-white-128gb-sm-a336ezwhxsp/\nSamsung A32 5G Key Specs:\nDisplay: 6.50-inch\nFront Camera: 13MP\nRear Camera: 48MP + 8MP + 5MP + 2MP\nRAM: 8GB / 4GB\nStorage: 128GB\nNFC: Yes\nBattery Capacity: 5000mAh (Fast Charging 15W)\nFor more details, please check at\nhttps://www.samsung.com/sg/smartphones/galaxy-a/galaxy-a32-5g-awesome-white-128gb-sm-a326bzwhxsp/\n-All products are 100% authentic.\n-Local Singapore set.\n-All products are sourced from authorised dealers,official stores and telcos (M1,Singtel,Starhub & etc).\n-Some products are unsealed to check for manufacturer defect.\n-All products warranty based on manufactured date.\n-Some products might less than 1 year warranty due to activation policy from dealers or telcos.\n-If you wish to purchase Samsung Care+,please request by leave a message when placing order.\n-Telcos receipt or official dealers receipt will be provided if available.\n-Store soft copy receipt can be issue upon request.\n-For products that comes with manufacturer warranty,buyer must contact manufacturer or visit manufacturer’s service center for repair/exchange or any technical support.\n-All products sold are not exchangeable and not refundable.',
                'weight' => 700,
                'images' => json_encode([
                    'demo-1bbc9b0b62a622cef316cc77b3753ef3',
                    'demo-59fb7142427406f53e628cb35d006082',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'Model',
                        'options' => [
                            'Awesome Black',
                            'Awesome White',
                        ]
                    ],
                ]),
            ],

            [
                'shop_id' => 8,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => 'Blackdot V200 Superlight Smartwatch with 60 Days Standby Battery, Touch Control, App Notifications, Temperature Sensor',
                'description' => 'The 2022 Blackdot V200 UNISEX Superlight Smartwatch with 60 Days Standby Battery, Full Touch Control, App Notifications, Temperature Sensor. #MOVESMART | AVAILABLE NOW |\nBlackdot V200 Smartwatch is packed with all the necessary features you need. This superlight smartwatch is designed for sports and activities and has 20 Sport modes for you to track and record data.\n✅Product Specifications & Features\nColours Available: Black\nControls: Full Touch Control\nScreen Resolution: 240*240\nDisplay:1.28 inches Round Screen\nDisplay Colour: Colour Screen\nWeight: Superlight (26g)\nBattery Capacity: 250mAh\nStandby time: 60 Days\nWorking Time: 18 Days\nCertificate: CE ROHS FCC\nWater Resistant: Yes (IP68) (Not recommended during shower or swimming)\nSupporting Devices: All Bluetooth enabled devices (Android 4.4 or above iOS 8.0 or above)\nWatch Faces: Customizable, able to set photos as wallpapers\nAPP: WoFit (Available in Play Store & App Store)\n✅Product Functions:\nBody Temperature Monitor: Yes\nHeart Rate Monitor: Yes\nBlood Pressure Monitor: Yes\nFitness/ Workout Tracker: Yes\nStep Counter: Yes\nChronograph: Yes\nMusic Controls: Yes (Able to play, pause, skip, control volume)\nCall Reminder: Yes (Able to Attend or reject calls)\nPush Message Notifications: Yes (Facebook, WhatsApp, Messages etc.)\nInbuilt Camera: No\nSupport SIM: No\nGPS: No\nNFC: No, not able to make payments\nMake Phone Calls: No\n✅What is inside the box:\n1 x Smart Watch\n1 x USB Charging Cable\n1 x User Manual\n✅Warranty/Return Policy Blackdot V200 Smartwatch has a warranty of 1 month. Physical damages caused by the user will not be considered for warranty or replacement. For replacement or refund, the item must be returned to us. You can visit our office or post the item back to us. We are 24/7 available and feel free to contact us at any time.\n©Blackdot Technologies Pte Ltd\n#SmartWatch #Blackdot #FitnessTracker',
                'weight' => 300,
                'images' => json_encode([
                    'demo-4cef6e48e42daadf581edea1401eea5f',
                    'demo-1a3abca44b320378246750ff2412efbb',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([]),
            ],

            [
                'shop_id' => 8,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => 'Blackdot GT Smart Watch Series 1 Waterproof With 60 Days Standby Battery, One Touch Control, App Notifications',
                'description' => '✅Blackdot GT Watch Series has arrived. #MOVESMART\nAVAILABLE NOW | Grab your GT watches now from our store.\nBlackdot GT Watch Series was launched on 26 April 2020. This multi-functional GT SmartWatch is compatible with iOS 9.0 and above, Android 4.4 and above.\n✅Product Features:\nControls: One Touch Control\nWater Resistant: Yes(IP68) Not recommended during shower or swimming.\nSupporting Devices: All Bluetooth Enabled Devices\nAPP: WoFit(Available in Play Store & App Store)\n✅Product Functions:\nStep Count\nHeart Rate Monitor\nBlood Pressure Monitor\nFitness Tracker(Running, Climbing, Cycling, Football, Rope)\nSleep Monitor\nStop Watch\nAlarm Function\nFind Device\nNotifications: Yes(Whats.App, Face.book, Inst.agram, etc.)\n✅Product Specifications:\nColors Available: Black & Grey\nDisplay:1.3 inches TFT\nDisplay Color: Color\nCamera: Not Available\nStandby time: 60 Days\nWorking Time: 18 Days\nCertificate: CE ROHS FCC\n✅What is inside the box:\n1 x Smart Watch\n1 x USB Charging Cable\n1 x User Manual\n✅Warranty/Return Policy\nBlackdot GT Smart Watch Series 1 has a warranty of 1 month. Physical damages caused by the user will not be considered for warranty or replacement. For replacement or refund, the item must be returned to us. You can visit our office or post the item back to us. We are 24/7 available and feel free to contact us at any time.\n©Blackdot Technologies Pte Ltd\n#SmartWatch #Blackdot #FitnessTracker',
                'weight' => 200,
                'images' => json_encode([
                    'demo-fc8f0f0ee474d6c94b895b0ae19811a3',
                    'demo-c8602c9bc1c254b54767d4e5cea10629',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'Colour',
                        'options' => [
                            'Black',
                            'Grey',
                        ]
                    ],
                ]),
            ],

            [
                'shop_id' => 9,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => 'Canvas bag female Korean Bag New Ladies Messenger Bag Canvas Literary Solid Color Single Tote Bag College and Middle School',
                'description' => 'We ARE selling Bag     (NOT Including bear accessories. If you want bear acc, tell us and it s free gift . if bear broken by delivery we will not refund for it)\nMaterial: canvas\nColor: showed as picture\nStyle: Casual\nWeight: 200G\nSize: 39*34*7cm\nKorean fashion\n📦Package Includes: shoulder bag *1\n💕Notes:💕\n😊1. Due to the light and screen setting difference, the item\'s color may be slightly different from the pictures.\n😊2. Please allow slight dimension difference due to different manual measurement.\n😊3. If the color of your order is not in stock, we will randomly send you other colors.\n🙏Thank you very much for coming to our store. 😋If you are not satisfied with this item 🚀Please go to my store',
                'weight' => 20,
                'images' => json_encode([
                    'demo-ba583a788f0f517c3ddfa99347fc6649',
                    'demo-a568c54efecb2e85e61987285246b8b6',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'Colour',
                        'options' => [
                            'Black',
                            'White',
                        ]
                    ],
                ]),
            ],

            [
                'shop_id' => 9,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => 'Direct Supply Blank Cotton Canvas Bag Student One-Shoulder Shopping Portable Various Sizes Bag Women Tote Bag Women Tote Bag',
                'description' => 'Material: Canvas\nColor: showed as picture\nStyle: Casual\nSize: few size selection\nKorean fashion\n📦Package Includes: tote bag *1\n💕Notes:💕\n😊1. Due to the light and screen setting difference, the item\'s color may be slightly different from the pictures.\n😊2. Please allow slight dimension difference due to different manual measurement.\n😊3. If the color of your order is not in stock, we will randomly send you other colors.\n🙏Thank you very much for coming to our store. 😋If you are not satisfied with this item 🚀Please go to my store',
                'weight' => 20,
                'images' => json_encode([
                    'demo-12e18e49ecc7f40d39ea5308b025bfc9',
                    'demo-ae04e3897975468d76d8eba733786add',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'Specifications',
                        'options' => [
                            '20x22',
                            '24x26',
                        ]
                    ],
                ]),
            ],
            //15
            [
                'shop_id' => 10,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => '🔥CHEAPEST SALES🔥SG READY STOCK🔥 Bundle Discount🔥 Hilton Grade Pillow | Five Star Hotel Pillow | 1000G',
                'description' => '🔥HOT SALES🔥\n🔥SG READY STOCK🔥\n🔥FAST SHIPMENT🔥\nALL PRICING ARE FOR 1 QUANTITY OF PILLOW ONLY!!!!!!\nDo Read Product description before checking out to avoid any misinformation.\n************************************************************************************************************\nTO NOTE\n-ALL PILLOW CASE IS STANDARD WHITE COLOUR\n-AS PILLOW COMES IN VACUUM PACK, DO PAT THE PILLOW OFTEN BEFORE USING TO FLUFF IT UP\n-NO RETURN/REFUND OF PILLOW UNDER THE CONDITION OF:\n-IF WASHED\n- OPENED\n- Washable pillow -> Hand washing is recommended\n************************************************************************************************************\nWe support bulk purchases, unlimited Bundle Discount to cater to your needs.\nFor >10 pillow do PM us for further discounts.\nHilton Grade Hotel 5 Star Premium Pillow\nZipper Type Pillow.\nDown Quilt Alternative Pillow\nCotton filling can be taken out/added based on personal pillow height preference.\nPRODUCT SPECIFICATION:\nType 1 and Type 3:\n-DIMENSION: 48* 74 cm\n-NET WEIGHT: 1000G\nType 2:\n-DIMENSION: 48* 74 cm\n-NET WEIGHT: 1100G\nType H: 1150g and Type H: 1350g\n-Microfiber Filling\n-HOTEL GRADE PILLOW\n-DIMENSION: 48* 74 cm\n-NET WEIGHT: 1150G & 1350g Respectively\n-No Zipper',
                'weight' => 1000,
                'images' => json_encode([
                    'demo-a00667b0876729397c426cbbd30cf580',
                    'demo-85e30e4328cb04fc5d985be402555227',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'Type',
                        'options' => [
                            'Type 1 : White',
                            'Type 1 : Black',
                        ]
                    ],
                ]),
            ],

            [
                'shop_id' => 10,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => '🔥SG READY STOCK🔥Premium Microfiber Hotel Quality Pillow | 100% Cotton | 1150g | 1350g | Microfiber Filing',
                'description' => '🔥FAST SHIPPING🔥\n🔥SG READY STOCK🔥\nDeluxe Hotel Quality Pillow:\nPillow Material - 100% Cotton\nPillow Filling - Microfiber\nSoft Pillow - Good Rebound\nMachine Washable\nPillow Weight:\n1150g - Suitable to Back/Stomach Sleeper\n1350g - Suitable for Side Sleeper\n************************************************************************************************************\nNO RETURN/REFUND OF PILLOW UNDER THE CONDITION OF:\n-IF WASHED\n- OPENED\n************************************************************************************************************',
                'weight' => 1150,
                'images' => json_encode([
                    'demo-aade44894e5dbff17bf81acf3b92aa29',
                    'demo-82c407de214ff8e7e321b6f9c621470d',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'Type',
                        'options' => [
                            '1 x 1150g',
                            '1 x 1350g',
                        ]
                    ],
                ]),
            ],

            [
                'shop_id' => 11,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => 'Mysleep & Promatt Mattress Collection | All Size Available',
                'description' => 'Is your current mattress affecting your Quality of Sleep? 🥱😪😴\n🧐 Are you looking for an affordable High-Quality Premium Hotel Grade Mattress? Good news!\n🥳 We have sold and delivered over 1000 pcs of Mattress monthly to Our Happy Customers. Hit us up and we will recommend the most suitable mattress for your requirements.\n✅ 𝗙𝗥𝗘𝗘 𝟮𝘅 𝗠𝘆𝘀𝗹𝗲𝗲𝗽 𝟭𝟬𝟬% 𝗦𝘆𝗻𝘁𝗵𝗲𝘁𝗶𝗰 𝗟𝗮𝘁𝗲𝘅 𝗣𝗶𝗹𝗹𝗼𝘄 (𝗪𝗼𝗿𝘁𝗵 $𝟴𝟬) 𝘄𝗶𝘁𝗵 𝗮 𝗺𝗶𝗻. 𝘀𝗽𝗲𝗻𝗱𝗶𝗻𝗴 𝗼𝗳 $𝟲𝟬𝟬\n✅ 𝗙𝗥𝗘𝗘 𝗗𝗲𝗹𝗶𝘃𝗲𝗿𝘆\nVisit us at any of our outlets islandwide and test our mattress today:\n📍 𝗝𝘂𝗿𝗼𝗻𝗴 𝗢𝘂𝘁𝗹𝗲𝘁 (The Furniture Mall)\nLocation: 10 Toh Guan Road, #01-29 The Furniture Mall S(608838)\n✅ PK - 8250 4068 (English & Malay)\n✅ Annie - 8269 7642 (Chinese & Malay)\n⏰ Mon-Sat (From 11.30am-8pm) | Sun&PH (From 11.30am-7pm)\n-------\n📍 𝗨𝗯𝗶 𝗢𝘂𝘁𝗹𝗲𝘁 (𝗢𝘅𝗹𝗲𝘆 𝗕𝗶𝘇𝗛𝘂𝗯)\nLocation: 71 Ubi Road 1, #10-39 Oxley BizHub S(408732)\n✅ Samantha - 9001 9891 (Chinese & English)\n✅ Kelvin - 8750 0475 (English & Chinese)\n⏰ Mon-Sat (From 11am-8pm) | Sun&PH (From 11am-6pm)\n--------\n📍 𝗦𝗲𝗺𝗯𝗮𝘄𝗮𝗻𝗴 𝗢𝘂𝘁𝗹𝗲𝘁 / 𝗪𝗮𝗿𝗲𝗵𝗼𝘂𝘀𝗲 (𝗡𝗼𝗿𝘁𝗵 𝗟𝗶𝗻𝗸 𝗕𝘂𝗶𝗹𝗱𝗶𝗻𝗴)\nLocation: 10 Admiralty Street, #05-89 North Link Building S(757695)\n✅ Agnes - 8398 3878 (Chinese & Malay)\n✅ Joey - 8816 8562 (English & Malay)\n⏰ Mon-Sat (From 9am-6pm) | Sun&PH (From 11am-6pm)\n--------\n*Policy*\n1. You are required to inspect the Product for any defects when you take delivery of it.\n2. Except as otherwise expressly provided herein, we shall not accept the return of a Product that has been delivered\nunless it is with our prior written consent and agreement. Only a return authorised by us will be accepted and\nour acceptance of any return of a Product shall be subject to such terms and conditions as we may prescribe at our sole and absolute discretion.\n3. Cost of transportation to and from the dealer is to be bear by the purchaser of this invoice & the transportation and\nservice charge will be from $70 onwards. Except as otherwise expressly provided herein, we shall not accept the return of a Product that has been delivered unless it is with our prior written consent and agreement. Only a return authorized\nby us will be accepted and our acceptance of any return of a Product shall be subject to such terms and conditions as\nwe may prescribe at our sole and absolute discretion.\n(Warranty covered on spring unit only)\n– This mattress has been manufactured under strict quality control and is guaranteed against any defects as a result of normal use within 10 years for Bonnell Spring and 12 years for Pocketed Spring from the date of purchase.\n– The material covering this mattress is not covered by this guarantee and damage caused by accident, misuse or\ntampered is also not covered by this warranty.',
                'weight' => 10000,
                'images' => json_encode([
                    'demo-6ec5424e52f82e42036ccf5ab5159374',
                    'demo-f064e526fa596512fe7707021b4fc8fd',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'PROMAT&MYSLE',
                        'options' => [
                            'Single 4"Foam',
                            'Single 6"Foam',
                        ]
                    ],
                ]),
            ],

            [
                'shop_id' => 11,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => 'Mysleep Hotel Grade 10"inch / 10"inch-26cm Imported Knitted Spring and Pocketed Spring Mattress | FREE&Next Day Delivery',
                'description' => 'Is your current mattress affecting your Quality of Sleep? 🥱😪😴\n🧐 Are you looking for an affordable High-Quality Premium Hotel Grade Mattress? Good news!\n🥳 We have sold and delivered over 1000 pcs of Mattress monthly to Our Happy Customers. Hit us up and we will recommend the most suitable mattress for your requirements.\n✅ 𝗙𝗥𝗘𝗘 𝟮𝘅 𝗠𝘆𝘀𝗹𝗲𝗲𝗽 𝟭𝟬𝟬% 𝗦𝘆𝗻𝘁𝗵𝗲𝘁𝗶𝗰 𝗟𝗮𝘁𝗲𝘅 𝗣𝗶𝗹𝗹𝗼𝘄 (𝗪𝗼𝗿𝘁𝗵 $𝟴𝟬) 𝘄𝗶𝘁𝗵 𝗮 𝗺𝗶𝗻. 𝘀𝗽𝗲𝗻𝗱𝗶𝗻𝗴 𝗼𝗳 $𝟲𝟬𝟬\n✅ 𝗙𝗥𝗘𝗘 𝗗𝗲𝗹𝗶𝘃𝗲𝗿𝘆\nVisit us at any of our outlets islandwide and test our mattress today:\n📍 𝗝𝘂𝗿𝗼𝗻𝗴 𝗢𝘂𝘁𝗹𝗲𝘁 (The Furniture Mall)\nLocation: 10 Toh Guan Road, #01-29 The Furniture Mall S(608838)\n✅ PK - 8250 4068 (English & Malay)\n✅ Annie - 8269 7642 (Chinese & Malay)\n⏰ Mon-Sat (From 11.30am-8pm) | Sun&PH (From 11.30am-7pm)\n------\n📍 𝗨𝗯𝗶 𝗢𝘂𝘁𝗹𝗲𝘁 (𝗢𝘅𝗹𝗲𝘆 𝗕𝗶𝘇𝗛𝘂𝗯)\nLocation: 71 Ubi Road 1, #10-39 Oxley BizHub S(408732)\n✅ Samantha - 9001 9891 (Chinese & English)\n✅ Kelvin - 8750 0475 (English & Chinese)\n⏰ Mon-Sat (From 11am-8pm) | Sun&PH (From 11am-6pm)\n--------\n📍 𝗦𝗲𝗺𝗯𝗮𝘄𝗮𝗻𝗴 𝗢𝘂𝘁𝗹𝗲𝘁 / 𝗪𝗮𝗿𝗲𝗵𝗼𝘂𝘀𝗲 (𝗡𝗼𝗿𝘁𝗵 𝗟𝗶𝗻𝗸 𝗕𝘂𝗶𝗹𝗱𝗶𝗻𝗴)\nLocation: 10 Admiralty Street, #05-89 North Link Building S(757695)\n✅ Agnes - 8398 3878 (Chinese & Malay)\n✅ Joey - 8816 8562 (English & Malay)\n⏰ Mon-Sat (From 9am-6pm) | Sun&PH (From 11am-6pm)\n--------\n*Policy*\n1. You are required to inspect the Product for any defects when you take delivery of it.\n2. Except as otherwise expressly provided herein, we shall not accept the return of a Product that has been delivered\nunless it is with our prior written consent and agreement. Only a return authorised by us will be accepted and\nour acceptance of any return of a Product shall be subject to such terms and conditions as we may prescribe at our sole and absolute discretion.\n3. Cost of transportation to and from the dealer is to be bear by the purchaser of this invoice & the transportation and\nservice charge will be from $70 onwards. Except as otherwise expressly provided herein, we shall not accept the return of a Product that has been delivered unless it is with our prior written consent and agreement. Only a return authorized\nby us will be accepted and our acceptance of any return of a Product shall be subject to such terms and conditions as\nwe may prescribe at our sole and absolute discretion.\n(Warranty covered on spring unit only)\n– This mattress has been manufactured under strict quality control and is guaranteed against any defects as a result of normal use within 10 years for Bonnell Spring and 12 years for Pocketed Spring from the date of purchase.\n– The material covering this mattress is not covered by this guarantee and damage caused by accident, misuse or\ntampered is also not covered by this warranty.',
                'weight' => 15000,
                'images' => json_encode([
                    'demo-7a63c042a894d3d27724d5901d75befb',
                    'demo-713b8696e36d70a5e243b4cbb9830db6',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'Hotel Series',
                        'options' => [
                            'Single 10" Spring',
                            'S.Single 10" Spring',
                        ]
                    ],
                ]),
            ],

            [
                'shop_id' => 12,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => 'novita Instant Hot Water Dispenser W18 (Tankless) - The Simplest + Free Gift',
                'description' => '⚠️PRE-ORDER\nWHITE - DEL FROM 1 JUN ONWARDS\nBLACK - DEL FROM 15 JUN ONWARDS\n⭐ FREE GIFT PROMOTION:\n✅ novita Nano Copper Ions Surgical Respirator R2 (100pcs in a box) (U P. $80)\n📌 Include Standard Installation: * Order will be delivered first, and followed by installation appointment from novita directly\nDecked in Glaze Black and Alpine White to build character in your living space, W18, The Simplest redefines old rules to give you extra time, additional space, quality water and more savings. Driven by HydroNano™ Ultra Filtration System, it provides instant access to unrivalled fresh, pristine and great tasting purified water all day long. Made in Korea and impresses with its 155 mm slimline and tankless design, this direct pipe-in instant hot water dispenser is your trusty companion to vastly enhance your daily routine and well-being today, everyday!\n🔶 FEATURES:\n✅ DISPENSE HOT/ ROOM TEMPERATURE WATER WITHIN 1 SECOND!\n✅ SLIM + COMPACT DESIGN AT JUST 115MM WIDTH!\n✅ ZERO WATER WASTAGE (NO WATER DISCHARGE DURING WATER DISPENSING)\n✅ TURN KNOB CONTROL\n✅ SMART FILTER REPLACEMENT INDICATOR ALERTS YOU 14-DAYS BEFORE FILTER IS DUE\n✅ ENERGY SAVING MODE:\n• When left idle for 10 minutes, unit automatically switches to energy-saving mode which uses almost 0 watts!\n✅ CHILD LOCK PROTECTION:\n• Guards against curious kids from accidental burn or scalding during hot water dispensing\n✅ EFFORTLESS EzTwist® DIY FILTER REPLACEMENT\n• Simply replace the EzTwist filter set with a twist to remove them!\n✅ REMOVABLE MAGNETIC DRIP TRAY\n✅ 1.7 METRES LONG POWER CORD\n🔶 4-STAGE HYDRONANO™ ULTRA FILTRATION SYSTEM:\n✅ SEDIMENT FILTER:\n• Filters suspended particles, rust and sediments from the source water\n✅ SILVER NANO CARBON BLOCK FILTER:\n• Impregnated with silver ions for extra bacteria resistance to deodorize & remove chlorine, VOCs, dissolved organic & inorganic impurities while improving colour for fresh and great tasting drinking water.\n✅ ACTIVATED CARBON FIBRE FILTER:\n• Enhances absorption capacity to achieve high performance of chlorine & unpleasant odours removal, reduction of VOCs & chemical residuals while greatly improving the taste of the water\n✅ ADVANCED ULTRA HOLLOW MEMBRANE FILTER:\n• Tested for proven efficiency by Korea Testing & Research Institute (KTR)\n• Effectively removes up to 99.9% of E.Coli, S.Aureus bacteria & suspended colloids up to 0.1 micron while keeping essential minerals intact',
                'weight' => 6000,
                'images' => json_encode([
                    'demo-1262c1f2fad4e312ae89e7e4f8913b5b',
                    'demo-77e5aff4eff9e51ec08c69f192678e14',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'W18 Colour',
                        'options' => [
                            'Alpine White',
                            'Glaze Black',
                        ]
                    ],
                    [
                        'name' => 'Filter Type',
                        'options' => [
                            'HydroNano™',
                        ]
                    ],
                ]),
            ],
            //20
            [
                'shop_id' => 12,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => 'novita Hot/Cold Water Dispenser W28 - The WaterStation + Free Gift',
                'description' => '⚠️ PRE-ORDER  - DEL FROM END-MAY/ EARLY-JUN ONWARDS\n⭐FREE GIFT PROMOTION:\n✅  novita Nano Copper Ions Surgical Respirator R2 (100pcs in a box) (U P. $80)\n📌 Include Standard Installation: * Order will be delivered first, and followed by installation appointment from novita directly\nBe surprised by the extra time and additional space, while rejoicing with quality water and more savings all at once with the novita Hot/Cold Water dispenser W28! Driven by HydroNano™ Ultra Filtration System, enjoy unrivalled fresh, pristine and great tasting purified water right at your fingertips to satisfy the all-day hydration needs and beyond. Packed with notable smart features and user-friendly interface, this WaterStation is definitely the perfect choice for your home/workplace, to keep up with your lifestyle!\n🔶FEATURES:\n✅ SLIM + COMPACT DESIGN AT 185MM WIDTH!\n✅ FLEXIBLE TEMPERATURE SETTINGS:\n• HOT WATER: 40°C - 98°C\n• COLD WATER: 3°C - 8°C\n✅ 3 PRESET VOLUME (280ml / 500ml / 800ml)\n✅ TANK CAPACITY:\n• HOT WATER: 1 Litres\n• COLD WATER: 1.4 Litres\n✅ FAST DISPENSING\n✅ 2 WATTS ENERGY SAVING MODE:\n• When unit senses surrounding darkness for 30 minutes, unit automatically switches off light indicators & both heating and cooling functions deactivate to reduce electricity consumption!\n✅ SMART FILTER REPLACEMENT INDICATOR ALERTS YOU 14-DAYS BEFORE FILTER IS DUE\n✅ EFFORTLESS EzTwist® FILTER SET WITH FRONT FILTER COVER FOR EASY FILTER REPLACEMENT\n• Simply replace the EzTwist filter set with a twist to remove them!\n✅ CLOCK DISPLAY\n✅ AMBIENCE LIGHT\n✅ REMOVABLE DRIP TRAY\n🔶 5-STAGE HYDRONANO™ ULTRA FILTRATION SYSTEM:\n✅ SEDIMENT FILTER:\n• Filters suspended particles, rust and sediments from the source water\n✅ SILVER NANO CARBON BLOCK FILTER:\n• Provides extra bacterial resistance while removing chlorine, reducing VOCs, chemical residuals & heavy metal ions\n• Deodorizes and enhance water taste\n✅ ACTIVATED CARBON FIBRE FILTER:\n• Removes residual chlorine, VOCs, chemicals or other impurities and greatly improves the taste of the water\n✅ ADVANCED ULTRA HOLLOW MEMBRANE FILTER:\n• Tested for proven efficiency by Korea Testing & Research Institute (KTR)\n• Removes 99.99% of Bacteria & suspended colloids up to 0.1 microns while keeping essential minerals intact\n✅ UV-C LED STERILIZATION:\n• Produces UV-C wavelength for effective water sterilization and ensures no residual / harmful by-products remains\n• Eliminates 99.9% of E.Coli and protects water against microorganisms such as virus, bacteria, algae, yeast and cryptosporidium\n*UV-C LED is semi-permanent and does not require replacement',
                'weight' => 11500,
                'images' => json_encode([
                    'demo-a263809ed64d5e6aef8bdf8a5a814cb2',
                    'demo-8e4b897d0641d4b46de628fc37e82315',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'W18 Colour',
                        'options' => [
                            'Arctic White',
                            'Jet Black',
                        ]
                    ],
                    [
                        'name' => 'Filter Type',
                        'options' => [
                            'HydroNano™',
                        ]
                    ],
                ]),
            ],

            [
                'shop_id' => 3,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => '【SG】 PBT Double Shot Pudding Keycap Set - OEM Profile',
                'description' => 'Local SG Seller – Fast Delivery – Buy with Confidence!\nNote: Keycaps only, keyboard not included.\nTransform your bland and boring keyboard into an Instagram-worthy one! These keycap sets are truly special. Guaranteed to bring your keyboard and setup to life with its vibrant color scheme and radiant colors.\n【COMPATIBILITY】\nFits most mechanical keyboards and optical keyboards that use Cherry MX switches or Cherry-like switches such as Gateron, Kailh, Outemu, and more.\n【DOUBLESHOT PBT KEYCAPS】\nMade of high-quality Polybutylene Terephthalate (PBT) material with textured/matte finish. PBT is more durable and oil-resistant than the cheapest and most commonly used ABS keycaps. PBT keycaps can be used for a long period before they show any sign of deterioration.\n【BACKLIGHT COMPATIBLE & ANTI-FADING】\nThe unique double shot construction process for clear fonts to let RGB LED backlighting shines through vibrantly, and key legends never fade.\n【OEM PROFILE】\nThe most popular OEM profile keycaps have sculpted shapes that conform to your fingertips to increase comfort during typing or gaming.\n【Keyboard Layout】\n- Base kit (110 keys) is compatible with 61/87/104/108 keys standard US/ANSI or UK/ISO mechanical keyboard which spacebar is 6.25u (around 11.7cm), and 1.25u bottom modifier keys.\n- Base kit + supplement kit will support other keyboard layout such as 64/68/71/72/82/84/100 keys mechanical keyboard and also Razer keyboard with 6.0u spacebar and Corsair K70/Logitech G710+ with 6.5u spacebar.\n- Full kit set (129 keys) is compatible with most 61/64/68/71/72/84/87/100/104/108 keys mechanical keyboard layout without the supplement kit, but supplement kit is still required to be compatible with Razer keyboard with 6.0u spacebar or Corsair K70/Logitech G710+ keyboard with 6.5u spacebar.\n【Specification】\nMaterial: PBT\nThickness: ~1.0 mm\nLegend: Double Shot\nBacklit: Yes\nLayout: ANSI/ISO 110/129 Keys\nProfile: OEM Profile',
                'weight' => 200,
                'images' => json_encode([
                    'demo-f169aa7361fd56051c4239539834bde0',
                    'demo-8c97455b2865f616a75b66d819d4c04c',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'Colour',
                        'options' => [
                            'White (129 Keys)',
                        ]
                    ],
                ]),
            ],

            [
                'shop_id' => 4,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => '[✅SG Ready Stock] 🔥 30L/70L Storage Box with Wheels / Storage Organizer Stackable',
                'description' => '🔥 30L/70L Storage Box with Wheels / Storage Organizer Stackable',
                'weight' => 5000,
                'images' => json_encode([
                    'demo-6b56925e442e74911e9f32ba8aff4934',
                    'demo-5ddd4032f8277d4dbce1ac20b904f6b7',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'Size',
                        'options' => [
                            '30L',
                        ]
                    ],
                ]),
            ],

            [
                'shop_id' => 5,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => 'KEF Kube 12B 12" Subwoofer',
                'description' => '• The Kube 12b effortlessly unleashes explosive power. iBX technology dynamically extends bass depth and KEF\'s unique ability to design, build and integrate the driver in-house takes optimisation to a whole new level. Delivering immersive music and home theatre sound that takes you to the heart of the performance.\n• Go deep or go home. KEF\'s design and engineering team worked in chorus to develop iBX. This Intelligent Bass Extension algorithm creates an extended depth that unlocks the full potential of the custom driver. Giving you unparalleled precision and ultimate synchronicity between amplifier, driver and sealed cabinet.',
                'weight' => 7000,
                'images' => json_encode([
                    'demo-b50e6f66a2154fd513f25a1464f026f0',
                    'demo-67d3e33d1327f98273762d8aad392bbf',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([]),
            ],

            [
                'shop_id' => 6,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => 'M220 Silent Wireless Mouse 1600DPI Optical Tracking accessories mice wireless mouse wireless gaming mice computer mouse',
                'description' => 'M220 Silent Wireless Mouse 1600DPI Optical Tracking accessories mice wireless mouse wireless gaming mice computer mouse wireless bluetooth wireless gaming mouse wireless mouse silent blue tooth mouse\nSpecification\nModel: M220\nType：wireless mouse\nColor：black / red / blue\nWireless transmission frequency:：2.4GHz\nNumber of buttons：3\nInterface：USB\nResolution：1600DPI\nOperating distance：10 m\nBattery type：AA\nErgonomics：Yes\nApplicable system：Windows 10 or Higher version / Windows 8 / Windows RT / Windows 7 / Mac OS X 10.5 or Higher version / Chrome OS / Linus Kernel 2.6+2\nMouse size：99 * 60 * 39 mm\nWeight of mouse (including battery) ：85g\naccessories mice wireless mouse wireless gaming mice computer mouse ergonomic mouse wireless bluetooth wireless gaming mouse wireless mouse silent blue tooth mouse',
                'weight' => 5000,
                'images' => json_encode([
                    'demo-dd787648e6a85debc81100ab1d12d724',
                    'demo-57e75a92ec7668c4fee7fc1314bbf69e',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'Color',
                        'options' => [
                            'Black M220',
                        ]
                    ],
                ]),
            ],
            //25
            [
                'shop_id' => 7,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => 'Samsung Galaxy S22 5G | S22 + S22 Plus 5G | S22 Ultra 5G | 1 Year Samsung Singapore Warranty',
                'description' => 'Samsung S22 5G Key Specs\nDisplay : 6.1 inches-Dynamic AMOLED 2X, 120Hz, HDR10+, 1300 nits (peak)\nCPU : Octa Core (2.99GHz, 2.4GHz, 1.7GHz)\nMain Camera : 50.0 MP + 10.0 MP + 12.0 MP\nSelfie Camera : 10.0 MP\nRAM : 8GB\nStorage : 128GB / 256GB\nBattery Capacity : 3700mAh (Fast Charging 25W)\nFor more details, please visit https://www.samsung.com/sg/smartphones/galaxy-s22/specs/\nSamsung S22+ 5G/S22 Plus 5G Key Specs\nDisplay : 6.6 inches-Dynamic AMOLED 2X, 120Hz, HDR10+, 1750 nits (peak)\nCPU : Octa Core (2.99GHz, 2.4GHz, 1.7GHz)\nMain Camera : 50.0 MP + 10.0 MP + 12.0 MP\nSelfie Camera : 10.0 MP\nRAM : 8GB\nStorage : 128GB / 256GB\nBattery Capacity : 4500mAh (Fast Charging 45W)\nFor more details, please visit https://www.samsung.com/sg/smartphones/galaxy-s22/\nSamsung S22 Ultra 5G Key Specs\nDisplay : 6.8 inches - Dynamic AMOLED 2X, 120Hz, HDR10+, 1750 nits (peak)\nCPU : Octa Core (2.99GHz, 2.4GHz, 1.7GHz)\nMain Camera : 108.0 MP + 10.0 MP + 12.0 MP + 10.0 MP\nSelfie Camera : 40.0 MP\nRAM : 8GB || 12GB\nStorage : 128GB || 256GB / 512GB\nBattery Capacity : 5000mAh (Fast Charging 45W)\nFor more details, please visit https://www.samsung.com/sg/smartphones/galaxy-s22-ultra/\n-All products are 100% authentic.\n-Local Singapore set.\n-All products are sourced from authorised dealers,official stores and telcos (M1,Singtel,Starhub & etc).\n-Some products are unsealed to check for manufacturer defect.\n-All products warranty based on manufactured date.\n-Some products might less than 1 year warranty due to activation policy from dealers or telcos.\n-If you wish to purchase Samsung Care+,please request by leave a message when placing order.\n-Telcos receipt or official dealers receipt will be provided if available.\n-Store soft copy receipt can be issue upon request.\n-For products that comes with manufacturer warranty,buyer must contact manufacturer or visit manufacturer’s service center for repair/exchange or any technical support.\n-All products sold are not exchangeable and not refundable.',
                'weight' => 700,
                'images' => json_encode([
                    'demo-f39c78e56c9493ff2de1aa0445bd85b3',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'Colour',
                        'options' => [
                            'Black ',
                        ]
                    ],
                ]),
            ],

            [
                'shop_id' => 8,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => 'Blackdot Y-Slim E18 Smart Watch With Colour Screen, Health Monitor, App Notifications, Alarm & Waterproof',
                'description' => 'Blackdot Y-Slim multi-functional E18 SmartWatch is compatible with iOS 8.2 and above, Android 4.4 and above.\nColors Available: Black Gold / Black Silver / Blue Silver\n✅Product Features:\nHeart rate monitoring and blood pressure monitoring.\nApps, messages and incoming call notification.\nRecord the steps.\nMonitor and analyze your whole sleep quality.\nWaterproof and Stopwatch function.\n✅Parameters Specifications:\nScreen: 0.96 inch screen (160*80)\nChip: NRF52832\nMemory: 256K+16M\nBT: BT 4.0\nSystem: for Android 4.4 / IOS 8.2 and above\nCharging: USB Charging\nBattery: 105mAh polymer lithium battery\nWorking time: 7 days\nStandby time: 30 days\nLanguage: Simplified Chinese, Traditional Chinese, English, French, German, Italian, Japanese, Korean, Malay, Portuguese, Russian, Spanish\nMain functions: Time, step count, heart rate monitor, blood pressure measurement, calories, distance, alarm, sleep monitor, call reminder, message reminder, sedentary reminder, stopwatch, phone search, etc\nCase Material: Stainless Steel + PC\nBand Material: TPU\nWater Resistant: IP67\nDial Diameter: 5.1 * 2.2cm / 2.01 * 0.871in\nDial Thickness: 1.3cm / 0.51in\nWatchband Width: 1.7cm / 0.67in\nWatchband Length: 22cm / 8.66in\nWatch Weight: 24g / 0.85oz\nPackage Size: 14 * 8.5 * 3cm / 5.51 * 3.35 * 1.18in\nPackage Weight: 76g / 2.68oz\n✅What is inside the box:\n1 x Smart Watch\n1 x USB Charging Cable\n1 x User Manual',
                'weight' => 700,
                'images' => json_encode([
                    'demo-a9f108e15647b7ec54c7b8f716c871ea',
                    'demo-bb01a64c7cdea0c457206a0eb17c7b0b',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'Colour',
                        'options' => [
                            'Black ',
                        ]
                    ],
                ]),
            ],

            [
                'shop_id' => 9,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => '2022 Korean style ins canvas bag female students Multi color single shoulder bag Backpack',
                'description' => 'Material: canvas\nColor: showed as picture\nStyle: Casual\nWeight: 230G\nSize: 38*34*5cm\nKorean fashion\n📦Package Includes: shoulder bag *1\n💕Notes:💕\n😊1. Due to the light and screen setting difference, the item\'s color may be slightly different from the pictures.\n😊2. Please allow slight dimension difference due to different manual measurement.\n😊3. If the color of your order is not in stock, we will randomly send you other colors.\n🙏Thank you very much for coming to our store. 😋If you are not satisfied with this item 🚀Please go to my store',
                'weight' => 100,
                'images' => json_encode([
                    'demo-4da8de1a8d116c0a56df88ff82839ca7',
                    'demo-5109ab4cafc532591504fed2a8b83759',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'Colour',
                        'options' => [
                            'White',
                        ]
                    ],
                ]),
            ],

            [
                'shop_id' => 10,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => '🔥SG READY STOCK🔥Ergonomic Memory Foam Pillow | Orthopedic Pillow | Contour Sleeping Pillow | Tencel Cooling | Breathable',
                'description' => '🔥FAST SHIPPING🔥\n🔥SG READY STOCK🔥\nWhy Memory Foam Pillow?\n- Natural Breathability\n- Anti-Bacteria, Anti-mites, Inhibit Mold.\n- Moisture Absorption\n- Excellent Hygroscopic Performance\nTo note:\n- MEMORY FOAM CORE AIR/SUN DRY ONLY - DO NOT WASH\n- Tencel Casing can be machine washed,\nProduct Description:\nType: 5128\n- Standard Design\n- Dimension -> 50*30*10/7\n- Core -> Memory Foam\n- Casing -> Bamboo Fibre\nType: 7158\n-Standard Design\n-Dimension -> 50*30*10/7\n-Core -> Charcoal Bamboo Memory Foam\n-Casing -> Tencel Cooling Zipper Case\nType: 7158 (Deluxe)\n-Standard Design\n-Dimension -> 60*35*12/8\n-Core -> Charcoal Bamboo Memory Foam\n-Casing -> Tencel Cooling Zipper Case\nType: 8093\n- Butterfly  Ergonomic Design\n-Dimension- 62*40*11/7\n-Core -> Memory Foam\n-Casing -> Tencel Cooling Zipper Case\n************************************************************************************************************\nNO RETURN/REFUND OF PILLOW UNDER THE CONDITION OF:\n-IF WASHED\n- OPENED\n************************************************************************************************************',
                'weight' => 2000,
                'images' => json_encode([
                    'demo-55ed14c6d0875ab87fdbde140da357d5',
                    'demo-90f57004b42869e2cf0b78999855bd45',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'Type',
                        'options' => [
                            'Type: 5128',
                        ]
                    ],
                ]),
            ],

            [
                'shop_id' => 11,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => 'Mysleep Premium Hotel Grade | Dynasty 10"inch Imported Knitted Fabric with Pocketed Spring | FREE & Next Day Delivery',
                'description' => 'Is your current mattress affecting your Quality of Sleep? 🥱😪😴\n🧐 Are you looking for an affordable High-Quality Premium Hotel Grade Mattress? Good news!\n🥳 We have sold and delivered over 1000 pcs of Mattress monthly to Our Happy Customers. Hit us up and we will recommend the most suitable mattress for your requirements.\n✅ 𝗙𝗥𝗘𝗘 𝟮𝘅 𝗠𝘆𝘀𝗹𝗲𝗲𝗽 𝟭𝟬𝟬% 𝗦𝘆𝗻𝘁𝗵𝗲𝘁𝗶𝗰 𝗟𝗮𝘁𝗲𝘅 𝗣𝗶𝗹𝗹𝗼𝘄 (𝗪𝗼𝗿𝘁𝗵 $𝟴𝟬) 𝘄𝗶𝘁𝗵 𝗮 𝗺𝗶𝗻. 𝘀𝗽𝗲𝗻𝗱𝗶𝗻𝗴 𝗼𝗳 $𝟲𝟬𝟬\n✅ 𝗙𝗥𝗘𝗘 𝗗𝗲𝗹𝗶𝘃𝗲𝗿𝘆\nVisit us at any of our outlets islandwide and test our mattress today:\n📍 𝗝𝘂𝗿𝗼𝗻𝗴 𝗢𝘂𝘁𝗹𝗲𝘁 (The Furniture Mall)\nLocation: 10 Toh Guan Road, #01-29 The Furniture Mall S(608838)\n✅ PK - 8250 4068 (English & Malay)\n✅ Annie - 8269 7642 (Chinese & Malay)\n⏰ Mon-Sat (From 11.30am-8pm) | Sun&PH (From 11.30am-7pm)\n-------\n📍 𝗨𝗯𝗶 𝗢𝘂𝘁𝗹𝗲𝘁 (𝗢𝘅𝗹𝗲𝘆 𝗕𝗶𝘇𝗛𝘂𝗯)\nLocation: 71 Ubi Road 1, #10-39 Oxley BizHub S(408732)\n✅ Samantha - 9001 9891 (Chinese & English)\n✅ Kelvin - 8750 0475 (English & Chinese)\n⏰ Mon-Sat (From 11am-8pm) | Sun&PH (From 11am-6pm)\n--------\n📍 𝗦𝗲𝗺𝗯𝗮𝘄𝗮𝗻𝗴 𝗢𝘂𝘁𝗹𝗲𝘁 / 𝗪𝗮𝗿𝗲𝗵𝗼𝘂𝘀𝗲 (𝗡𝗼𝗿𝘁𝗵 𝗟𝗶𝗻𝗸 𝗕𝘂𝗶𝗹𝗱𝗶𝗻𝗴)\nLocation: 10 Admiralty Street, #05-89 North Link Building S(757695)\n✅ Agnes - 8398 3878 (Chinese & Malay)\n✅ Joey - 8816 8562 (English & Malay)\n⏰ Mon-Sat (From 9am-6pm) | Sun&PH (From 11am-6pm)\n--------\n*Policy*\n1. You are required to inspect the Product for any defects when you take delivery of it.\n2. Except as otherwise expressly provided herein, we shall not accept the return of a Product that has been delivered\nunless it is with our prior written consent and agreement. Only a return authorised by us will be accepted and\nour acceptance of any return of a Product shall be subject to such terms and conditions as we may prescribe at our sole and absolute discretion.\n3. Cost of transportation to and from the dealer is to be bear by the purchaser of this invoice & the transportation and\nservice charge will be from $70 onwards. Except as otherwise expressly provided herein, we shall not accept the return of a Product that has been delivered unless it is with our prior written consent and agreement. Only a return authorized\nby us will be accepted and our acceptance of any return of a Product shall be subject to such terms and conditions as\nwe may prescribe at our sole and absolute discretion.\n(Warranty covered on spring unit only)\n– This mattress has been manufactured under strict quality control and is guaranteed against any defects as a result of normal use within 10 years for Bonnell Spring and 12 years for Pocketed Spring from the date of purchase.\n– The material covering this mattress is not covered by this guarantee and damage caused by accident, misuse or\ntampered is also not covered by this warranty.',
                'weight' => 40000,
                'images' => json_encode([
                    'demo-cbeb2f1e11d2aff38a008c5309da0234',
                    'demo-338ed342e58ee2d93b657794ca66f8fc',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'Type',
                        'options' => [
                            'Single 10"inch',
                        ]
                    ],
                ]),
            ],
            //30
            [
                'shop_id' => 11,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => 'Promatt Calista 10"inch Bamboo Fabric Pocketed Spring Mattress | Direct Factory Sales',
                'description' => 'Is your current mattress affecting your Quality of Sleep? 🥱😪😴\n🧐 Are you looking for an affordable High-Quality Premium Hotel Grade Mattress? Good news!\n🥳 We have sold and delivered over 1000 pcs of Mattress monthly to Our Happy Customers. Hit us up and we will recommend the most suitable mattress for your requirements.\n✅ 𝗙𝗥𝗘𝗘 𝟮𝘅 𝗠𝘆𝘀𝗹𝗲𝗲𝗽 𝟭𝟬𝟬% 𝗦𝘆𝗻𝘁𝗵𝗲𝘁𝗶𝗰 𝗟𝗮𝘁𝗲𝘅 𝗣𝗶𝗹𝗹𝗼𝘄 (𝗪𝗼𝗿𝘁𝗵 $𝟴𝟬) 𝘄𝗶𝘁𝗵 𝗮 𝗺𝗶𝗻. 𝘀𝗽𝗲𝗻𝗱𝗶𝗻𝗴 𝗼𝗳 $𝟲𝟬𝟬\n✅ 𝗙𝗥𝗘𝗘 𝗗𝗲𝗹𝗶𝘃𝗲𝗿𝘆\nVisit us at any of our outlets islandwide and test our mattress today:\n📍 𝗝𝘂𝗿𝗼𝗻𝗴 𝗢𝘂𝘁𝗹𝗲𝘁 (The Furniture Mall)\nLocation: 10 Toh Guan Road, #01-29 The Furniture Mall S(608838)\n✅ PK - 8250 4068 (English & Malay)\n✅ Annie - 8269 7642 (Chinese & Malay)\n⏰ Mon-Sat (From 11.30am-8pm) | Sun&PH (From 11.30am-7pm)\n-------\n📍 𝗨𝗯𝗶 𝗢𝘂𝘁𝗹𝗲𝘁 (𝗢𝘅𝗹𝗲𝘆 𝗕𝗶𝘇𝗛𝘂𝗯)\nLocation: 71 Ubi Road 1, #10-39 Oxley BizHub S(408732)\n✅ Samantha - 9001 9891 (Chinese & English)\n✅ Kelvin - 8750 0475 (English & Chinese)\n⏰ Mon-Sat (From 11am-8pm) | Sun&PH (From 11am-6pm)\n--------\n📍 𝗦𝗲𝗺𝗯𝗮𝘄𝗮𝗻𝗴 𝗢𝘂𝘁𝗹𝗲𝘁 / 𝗪𝗮𝗿𝗲𝗵𝗼𝘂𝘀𝗲 (𝗡𝗼𝗿𝘁𝗵 𝗟𝗶𝗻𝗸 𝗕𝘂𝗶𝗹𝗱𝗶𝗻𝗴)\nLocation: 10 Admiralty Street, #05-89 North Link Building S(757695)\n✅ Agnes - 8398 3878 (Chinese & Malay)\n✅ Joey - 8816 8562 (English & Malay)\n⏰ Mon-Sat (From 9am-6pm) | Sun&PH (From 11am-6pm)\n--------\n*Policy*\n1. You are required to inspect the Product for any defects when you take delivery of it.\n2. Except as otherwise expressly provided herein, we shall not accept the return of a Product that has been delivered\nunless it is with our prior written consent and agreement. Only a return authorised by us will be accepted and\nour acceptance of any return of a Product shall be subject to such terms and conditions as we may prescribe at our sole and absolute discretion.\n3. Cost of transportation to and from the dealer is to be bear by the purchaser of this invoice & the transportation and\nservice charge will be from $70 onwards. Except as otherwise expressly provided herein, we shall not accept the return of a Product that has been delivered unless it is with our prior written consent and agreement. Only a return authorized\nby us will be accepted and our acceptance of any return of a Product shall be subject to such terms and conditions as\nwe may prescribe at our sole and absolute discretion.\n(Warranty covered on spring unit only)\n– This mattress has been manufactured under strict quality control and is guaranteed against any defects as a result of normal use within 10 years for Bonnell Spring and 12 years for Pocketed Spring from the date of purchase.\n– The material covering this mattress is not covered by this guarantee and damage caused by accident, misuse or\ntampered is also not covered by this warranty.',
                'weight' => 40000,
                'images' => json_encode([
                    'demo-22e2ff7209887cd74b00315377de009a',
                    'demo-6a50e63534c7b80a4f2922368be686c7',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'Calista 10"Inc',
                        'options' => [
                            'Single',
                        ]
                    ],
                ]),
            ],

            [
                'shop_id' => 12,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => 'novita 15” Undersink Filtration System W61 – The Home • Hi-Flow + Free Gift',
                'description' => '⚠️PRE-ORDER - DEL FROM END MAY ONWARDS\n⭐ FREE GIFT PROMOTION:\n✅ novita Nano Copper Ions Surgical Respirator R2 (100pcs in a box) (U P.$80)\n📌 Include Standard Installation: * Order will be delivered first, and followed by installation appointment from novita directly\nDriven by high capacity HydroNano™ Ultra filtration system, it filters up to 0.1 micron and eliminates 99.9% of chlorine and bacteria such as E.Coli. Supporting up to 35,000 litres of fast flow dispensing up to 8.0 Litres/Min, it provides unrivalled fresh, pristine and great tasting purified water, all while enhancing the flavour, fragrance and natural colours of your dishes and beverages! Better yet, this plug-free unit connects directly to the water source and tucked neatly in the sink cabinet to keep counter space clutter-free. Comes with a dedicated LED faucet with its ring light doubling up as a filter lifespan indicator to prompt for timely replacement.\n🔶 FEATURES:\n✅ LED WATER FAUCET INCLUDED:\n• FAUCET COLOURS: Cool Black / Glazed White / Polished Chrome (Silver)\n✅ HIGH FILTRATION CAPACITY: 15,000 LITRES\n✅ 99% REMOVAL OF BACTERIA & CHLORINE\n✅ EFFORTLESS DIY FILTER REPLACEMENT\n• Simply replace the EzTwist filter set with a twist to remove them!\n✅ UP TO 95% SAVINGS\n✅ EXCESS SPACE IN THE KITCHEN\n✅ ADVANCED ULTRA HOLLOW MEMBRANE\n✅ OPERATIONAL EASE, NO ELECTRICITY REQUIRED\n✅ LED FAUCET RING LIGHT THAT DOUBLES UP AS FILTER LIFESPAN INDICATOR FOR TIMELY FILTER REPLACEMENT\n🔶 3-STAGE HYDRONANO™ (PURIFIED WATER) ULTRA FILTRATION SYSTEM:\n✅ SEDIMENT FILTER:\n• Filters suspended fine particles, rust and sediments from source water\n✅ CARBON FIBRE FILTER:\n• Enhances absorption capacity to achieve high performance of chlorine and unpleasant odours removal, reduction of VOCs & chemical residuals while greatly improving the taste of water\n✅ ADVANCED ULTRA HOLLOW MEMBRANE FILTER:\n• Removes 99.9% of bacteria such as E.Coli and suspended colloids up to 0.1 microns while keeping essential minerals intact',
                'weight' => 7000,
                'images' => json_encode([
                    'demo-aafb1de67533e10559507a5cb5b818d9',
                    'demo-f5c2a0f343333c3826e6b799afe97a82',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'Faucet Colour',
                        'options' => [
                            'Cool Black',
                        ]
                    ],
                ]),
            ],

            [
                'shop_id' => 12,
                'brand_id' => 1,
                'status_id' => ProductStatus::Published,
                'name' => 'novita 15” Undersink Filtration System W62 – The Home • Ultra + Free Gift',
                'description' => '⚠️PRE-ORDER - DEL FROM END MAY ONWARDS\n⭐ FREE GIFT PROMOTION:\n✅ novita Nano Copper Ions Surgical Respirator R2 (100pcs in a box) (U P.$80)\n📌 Include Standard Installation: * Order will be delivered first, and followed by installation appointment from novita directly\nDriven by high capacity HydroNano™ Ultra filtration system, it filters up to 0.1 micron and eliminates 99.9% of chlorine and bacteria such as E.Coli. Supporting up to 35,000 litres of fast flow dispensing up to 8.0 Litres/Min, it provides unrivalled fresh, pristine and great tasting purified water, all while enhancing the flavour, fragrance and natural colours of your dishes and beverages! Better yet, this plug-free unit connects directly to the water source and tucked neatly in the sink cabinet to keep counter space clutter-free. Comes with a dedicated LED faucet with its ring light doubling up as a filter lifespan indicator to prompt for timely replacement.\n🔶 FEATURES:\n✅ LED WATER FAUCET INCLUDED:\n• FAUCET COLOURS: Cool Black / Glazed White / Polished Chrome (Silver)\n✅ HIGH FILTRATION CAPACITY: 25,000 LITRES\n✅ 99% REMOVAL OF BACTERIA & CHLORINE\n✅ EFFORTLESS DIY FILTER REPLACEMENT\n• Simply replace the EzTwist filter set with a twist to remove them!\n✅ UP TO 95% SAVINGS\n✅ EXCESS SPACE IN THE KITCHEN\n✅ ADVANCED ULTRA HOLLOW MEMBRANE\n✅ OPERATIONAL EASE, NO ELECTRICITY REQUIRED\n✅ LED FAUCET RING LIGHT THAT DOUBLES UP AS FILTER LIFESPAN INDICATOR FOR TIMELY FILTER REPLACEMENT\n🔶 5-STAGE HYDRONANO™ (PURIFIED WATER) ULTRA FILTRATION SYSTEM:\n✅ PRE-SEDIMENT FILTER:\n• Filters suspended fine particles, rust and sediments from source water\n✅ SILVER NANO CARBON BLOCK FILTER:\n• Eliminates chlorine, VOCs & dissolved impurities to provide fresh and great tasting drinking water\n• Impregnated with nano silver ions to effectively prevent & inhibit bacteria growth within the filter to keep the water safe and clean\n✅ POST-SEDIMENT FILTER:\n• Removes residual suspended particles, rust and sediments\n✅ CARBON FIBRE FILTER:\n• Enhances absorption capacity to achieve high performance of chlorine and unpleasant odours removal, reduction of VOCs & chemical residuals while greatly improving the taste of the water\n✅ ADVANCED ULTRA HOLLOW MEMBRANE FILTER:\n• Removes 99.9% of bacteria such as E.Coli and suspended colloids up to 0.1 microns while keeping essential minerals intact',
                'weight' => 14000,
                'images' => json_encode([
                    'demo-7f8fce604d0a2456e12068d0352ba1af',
                    'demo-f5c2a0f343333c3826e6b799afe97a82 (1)',
                ]),
                'videos' => json_encode([]),
                'variations' => json_encode([
                    [
                        'name' => 'Faucet Colour',
                        'options' => [
                            'Cool Black',
                        ]
                    ],
                ]),
            ],

        ]);
    }
}
