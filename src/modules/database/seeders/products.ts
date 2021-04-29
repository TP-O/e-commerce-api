import { Seeder } from '@modules/database/core/seeder';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class ProductsSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'products';

  /**
   * Constructor.
   *
   * @param database database instance.
   */
  public constructor(protected database: Database) {
    super(database);
  }

  /**
   * Insert data to table.
   */
  protected async run() {
    await this.database.table('products').insert(
      // Column names
      ['sellerId', 'categoryId', 'brandId', 'name', 'slug', 'description', 'price', 'amount'],
      // Inserted data
      [
        // Smart Phone

            //Iphone

                 //Iphone 12

                 ['1', '21', '', 'IPhone 12 mini 256GB', 'iphone-12-mini-256gb', 'Mini version of Iphone 12', '22490', '5'],
                 ['2', '21', '', 'IPhone 12 plus ', 'iphone-12-plus', 'Another version of Iphone 12 with better performance', '16890', '8'],
 
                 //Iphone 12 Pro
 
                 ['1', '22', '', 'IPhone 12 Pro max 512GB', 'iphone-12-pro-max-512gb', 'Better version of Iphone 12 Pro', '41490', '3'],
                 ['2', '22', '', 'IPhone 12 Pro Premium', 'iphone-12-pro-premium', 'Limited version of Iphone 12 Pro', '48490', '7'],
 
                 //Iphone 13
 
                 ['2', '23', '', 'IPhone 13 Pro 512GB', 'iphone-13-pro-512gb', 'Pro version of Iphone 13', '55490', '6'],
                 ['2', '23', '', 'IPhone 13 mini 64GB', 'iphone-13-mini-64gb', 'Mini version of Iphone 13', '50490', '4'],
 
             //Samsung
 
                 //Samsung Galaxy S20 Plus
 
                 ['1', '24', '', 'Samsung Galaxy S20 Plus Ultra', 'samsung-galaxy-s20-plus-ultra', 'Brand new version of Samsung Galaxy S20 Plus with great improvements', '20490', '2'],
                 ['1', '24', '', 'Samsung Galaxy S20 Plus Premium', 'samsung-galaxy-s20-plus-premium', 'Limited version of Samsung Galaxy S20 Plus with unique design', '30490', '1'],
 
                 //Samsung Galaxy A51
 
                 ['1', '25', '', 'Samsung Galaxy A51 Plus 5GB', 'samsung-galaxy-a51-plus-5gb', 'New version of Samsung Galaxy A51 with outstanding improvements', '22490', '9'],
                 ['2', '25', '', 'Samsung Galaxy A51 Premium', 'samsung-galaxy-a51-premium', 'Limited Royal version of Samsung Galaxy A51 with extraordinary design', '35490', '1'],
 
                 //Samsung Galaxy M11
 
                 ['2', '26', '', 'Samsung Galaxy M11 Plus', 'samsung-galaxy-m11-plus', 'New version of Samsung Galaxy M11 with great enhancements', '27650', '10'],
                 ['2', '26', '', 'Samsung Galaxy M11 Ultra', 'samsung-galaxy-m11-ultra', 'Highly recommended version of Samsung Galaxy M11 with additional functionalities', '36530', '15'],
 
             //Xiaomi
 
                 //Xiaomi Redmi 8
 
                 ['2', '27', '', 'Xiaomi Redmi 8 Pro', 'xiaomi-redmi-8-pro', 'Professional version of Xiaomi Redmi 8 with additional functionalities', '12520', '20'],
                 ['1', '27', '', 'Xiaomi Redmi 8 Premium', 'xiaomi-redmi-8-premium', 'Limited luxurious version of Xiaomi Redmi 8 with extraordinary design', '18630', '15'],
 
 
                 //Xiaomi redmi note 10
 
                 ['1', '28', '', 'Xiaomi Redmi Note 10 Pro', 'xiaomi-redmi-note-10-pro', 'Professional version of Xiaomi Redmi Note 10 with additional functionalities', '30900', '18'],
                 ['2', '28', '', 'Xiaomi Redmi Note 10 Royal', 'xiaomi-redmi-note-10-royal', 'Royal version of Xiaomi Redmi Note 10 with luxurious design', '33690', '25'],
 
 
                 //Xiaomi POCO M3
 
                 ['1', '29', '', 'Xiaomi POCO M3 Pro', 'xiaomi-poco-m3-pro', 'Fully Upgraded version of Xiaomi POCO M3 with additional designs', '11970', '12'],
                 ['1', '29', '', 'Xiaomi POCO M3 Super', 'xiaomi-poco-m3-super', 'Brand new version of Xiaomi POCO M3 with exclusive water proof design', '10290', '13'],
             
 
         // Electronic Devices
 
             //TV
 
                 //TV OLED
 
                 ['2', '30', '', 'LG Smart TV OLED 55CXPTA', 'lg-smart-tv-oled-55cxpta', 'New version of LG Smart TV with exclusive functionalities', '62190', '7'],
                 ['1', '30', '', 'Sony Android TV OLED KD65A8H', 'sony-android-tv-oled-kd65a8h', 'Brand new version of Sony Smart TV for androids', '39990', '5'],
 
 
                 //TV QLED
                 
                 ['2', '31', '', 'Samsung Smart TV QLED QA50Q80A', 'samsung-smart-tv-qled-qa50q80a', 'New version of Samsung Smart TV with exclusive functionalities', '28900', '9'],
                 ['2', '31', '', 'Samsung Smart TV NEO OLED QA50QN90A ', 'samsung-smart-tv-qled-qa50qn90a ', 'Brand new version of Samsung Smart TV OLED with extraordinary functionalities', '39900', '3'],
 
                 //TV 4K
 
                 ['1', '32', '', 'LG Smart TV Nanocell 4K 55NANO79TND', 'lg-smart-tv-nanocell-4k-55nano79tnd', 'New version of LG Smart TV with Nanocell', '14890', '2'],
                 ['1', '32', '', 'Samsung Smart TV Micro LED 4K MNA110MS1A', 'samsung-smart-tv-micro-led-4k-mna110ms1a', 'Brand new version of Samsung Smart TV LED with extraordinary designs', '33490', '4'],
 
             //Air Conditioner
 
                 //Best seller
 
                 ['1', '33', '', 'Kachi Portable Air Conditioner MK121', 'kachi-portable-air-conditioner-mk121', 'Unique version of Kachi Air Conditioner with the portability advancement', '8799', '6'],
                 ['2', '33', '', 'Casper Air Conditioner 1HP SC09TL32', 'casper-air-conditioner-1hp-sc09tl32', 'Brand new version of Casper Air Conditioner with exclusive design', '4538', '8'],
 
                 //New 2021
 
                 ['1', '34', '', 'Toshiba Inverter Air Conditioner 1HP RASH10D2KCVGV', 'toshiba-inverter-air-conditioner-1hp-rash10d2kcvgv', 'New version of Toshiba Inverter Air Conditioner with extraordinary design', '7739', '10'],
                 ['2', '34', '', 'Daikin Inverter Air Conditioner 2HP FTKA35UAVMV', 'daikin-inverter-air-conditioner-2hp-ftka35uavmv', 'New version of Daikin Inverter Air Conditioner with the extraordinary design', '10613', '12'],
 
                 //Inverter
 
                 ['2', '35', '', 'Sharp Inverter Air Conditioner 1HP AHX9XEW', 'sharp-inverter-air-conditioner-1hp-ahx9xew', 'New version of Sharp Inverter Air Conditioner with the extraordinary design', '6350', '14'],
                 ['1', '35', '', 'LG Inverter Air Conditioner 1.5HP V13ENS1', 'lg-inverter-air-conditioner-1.5hp-v13ens1', 'New Version of LG Inverter Air Conditioner with the portability advancement', '8028', '16'],
 
             //Fridge
 
                 //Best seller
 
                 ['2', '36', '', 'Daikin Inverter Air Conditioner 2HP FTKA35UAVMV', 'daikin-inverter-air-conditioner-2hp-ftka35uavmv', 'New version of Daikin Inverter Air Conditioner with the extraordinary design', '10613', '12'],
                 ['1', '36', '', 'Daikin Inverter Air Conditioner 2HP FTKA35UAVMV', 'daikin-inverter-air-conditioner-2hp-ftka35uavmv', 'New version of Daikin Inverter Air Conditioner with the extraordinary design', '10613', '12'],
 
                 //New 2021
 
                 ['2', '37', '', 'Daikin Inverter Air Conditioner 2HP FTKA35UAVMV', 'daikin-inverter-air-conditioner-2hp-ftka35uavmv', 'New version of Daikin Inverter Air Conditioner with the extraordinary design', '10613', '12'],
                 ['1', '37', '', 'Daikin Inverter Air Conditioner 2HP FTKA35UAVMV', 'daikin-inverter-air-conditioner-2hp-ftka35uavmv', 'New version of Daikin Inverter Air Conditioner with the extraordinary design', '10613', '12'],
 
                 //Inverter
 
                 ['2', '38', '', 'Samsung Inverter Fridge 380L RT38K5930DXSV', 'samsung-inverter-fridge-380l-rt38k5930dxsv', 'New version of Samsung Inverter Fridge with the special design', '12340', '18'],
                 ['1', '38', '', 'Side By Side Inverter LG Fridge 601L GRD247MC', 'side-by-side-inverter-fridge-lg-601l-grd247mc', 'New version of Side By Side Inverter Fridge LG with the extraordinary design', '31990', '20'],
 
 
         //House Tools
 
             //Cooking Tools
 
                 //Cookers
 
                 ['2', '39', '', 'Cuckcoo Rice Cooker CRPJHR1060FD', 'cuckcoo-rice-cooker-crpjhr1060fd', 'New version of Cuckcoo Rice Cooker with the extraordinary features', '13090', '11'],
                 ['2', '39', '', 'Panasonic Rice Cooker SRCX188SRA', 'panasonic-rice-cooker-srcx188sra', 'New version of Panasonic Rice Cooker with the various features', '10990', '13'],
 
                 //Bowls and Dishes
 
                 ['1', '40', '', 'Rire Series Korean Style Set', 'rire-series-korean-style-set', 'The highly recommended collection of crockery with incredible Korean style design', '3033', '15'],
                 ['1', '40', '', 'Luminarc Tempered Glass Dinnerware Set', 'luminarc-tempered-glass-dinnerware-set', 'One of the popular Luminarc Dinnerware set with high-quality material', '4200', '17'],
 
                 //Glasses
 
                 ['1', '41', '', 'Luminarc Flashy Expresso Cup', 'luminarc-flashy-expresso-cup', 'One of the Luminarc series with multiple unique colours design', '400', '50'],
                 ['1', '41', '', 'Luminarc Flashy Breakfast Mokamina Cup', 'luminarc-flashy-breakfast-mokamina-cup', 'One of the Luminarc series with multiple unique colours design', '500', '70'],
 
             //Lighting devices
 
                 //Study Lamps
 
                 ['2', '42', '', 'Phillips 61013 A 5Watt LED Desklight', 'phillips-61013-a-5watt-led-desklight', 'Highly recommended lamp for children eyes protection', '1623', '19'],
                 ['2', '42', '', 'Rylan Rechargeable LED Desk Lamp', 'rylan-rechargeable-led-desk-lamp', 'Highly recommended lamp for children eyes protection', '1153', '21'],
 
                 //Light Bulbs
 
                 ['1', '43', '', 'Comet LED Bulbs Lighter', 'comet-led-bulbs-lighter', 'The set of six 3Watt light bulbs', '250', '25'],
                 ['2', '43', '', 'Sylvania LED A19 Light Bulb', 'sylvania-led-a19-light-bulb', 'The set of 24 9watt daylight color temperature light bulbs', '40', '27'],
 
                 //Bedside Lamps
 
                 ['2', '44', '', 'Xiaomi Smart Bedside Lamp', 'xiaomi-smart-bedside-lamp', 'New smart product of Xiami manufacturer', '850', '29'],
                 ['1', '44', '', 'Yeelight Staria Bedside Lamp Pro YLCT03YLP', 'yeelight-staria-bedside-lamp-pro-ylct03ylp', 'Smart interactive remote-controlled bedside lamp', '1600', '31'],
 
             //Furniture
 
                 //Beds
 
                 ['2', '45', '', 'Topper Everon White Bed', 'topper-everon-white-bed', 'New Korean Bed with luxurious material', '850', '33'],
                 ['1', '45', '', 'Everon Lite Cotton Bed', 'everon-lite-cotton-bed', 'New Korean Bed with classic material', '1499', '35'],
 
                 //Wardrobes
 
                 ['1', '46', '', 'OEM Wardrobe', 'oem-wardrobe', 'New OEM Wardrobe with elegant design', '3500', '37'],
                 ['2', '46', '', 'SMLife Carmelo Modern Wardrobe', 'smlife-carmelo-modern-wardrobe', 'New SMLife Carmelo Wardrobe with luxurious and high-end design', '4350', '6'],
 
                 //Kettles
 
                 ['1', '47', '', 'Sunhouse SHD1182', 'sunhouse-shd1182', 'One of the best seller kettles of Sunhouse Manufacturer', '19', '37'],
                 ['2', '47', '', 'Kangaroo KG18K1', 'kangaroo-kg18k1', 'One of the most popular kettles of Kangaroo Manufacturer', '17', '39'],
 
         
         //Food Products
 
             //Beverages
 
                 //Tiger
 
                 ['1', '48', '', 'Tiger Crystal 330ml', 'tiger-crystal-330ml', 'A set of crystal tiger beer 16 cans', '235', '12'],
                 ['2', '48', '', 'Tiger Lunar New Year Limited 330ml', 'tiger-lunar-new-year-limited-330ml', 'A limited lunar new year version of Tiger beer', '355', '15'],
 
                 //Budweiser
 
                 ['2', '49', '', 'Budweiser Pack of 20 bottles 330ml', 'budweiser-pack-of-20-bottles-330ml', 'A pack of 20 bottles Budweiser', '295', '16'],
                 ['1', '49', '', 'Budweiser Lunar New Year Limited 500ml', 'budweiser-lunar-new-year-limited-500ml', 'Another version of Budweiser for celebrating Lunar New Year', '380', '7'],
 
                 //Heineken
 
                 ['2', '50', '', 'Heineken Silver 330ml', 'heineken-silver-330ml', 'A pack of 24 Heineken Silver cans', '19', '11'],
                 ['1', '50', '', 'Heineken 0.0 Sleek 330ml', 'heineken-0.0-sleek-330mml', 'Another lightened version of Heineken', '19', '6'],
 
             //Foods
 
                 //Junk Foods
 
                 ['1', '51', '', 'Chocolate Snickers Miniatures 100gr', 'chocolate-snickers-miniatures-100gr', 'A pack of Snickers chocolates', '85', '89'],
                 ['1', '51', '', 'Oreo Mini Chocolate Cookies 204gr', 'oreo-mini-chocolate-cookies-204gr', 'A pack of numberous oreo mini cookies', '51', '86'],
 
                 //Functional Foods
 
                 ['2', '52', '', 'Blackmores Fish Oil Odourless', 'blackmores-fish-oil-miniatures-100gr', 'A bottle of Blackmores Odourless Fish Oil containing 400 capsules', '471', '14'],
                 ['2', '52', '', 'Blackmores Glucosamine Sulfate', 'blackmores-glucosamine-sulfate', 'A bottle of Blackmores Glucosamine Sulfate containing 100 capsules', '741', '8'],
 
                 //Organic Foods
 
                 ['1', '53', '', 'Absolute Organic Chia Seeds 1Kg', 'absolute-organic-chia-seeds-1kg', 'A pack of Chia Seeds produced from Vietnam', '145', '23'],
                 ['1', '53', '', 'SPIRULINA PURE 20GR', 'spirulina-pure-20gr', 'A bottle of spirulina pure used for Spa', '750', '25'],
 
             //Pet Foods
 
                 //Food For Dogs
 
                 ['1', '54', '', 'American Journey Active Life', 'american-journey-active-life', 'Formula Salmon, Brown Rice & Vegetables Recipe Dry Dog Food', '800', '31'],
                 ['2', '54', '', 'Blue Buffalo', 'blue-buffalo', 'Life Protection Formula Adult Chicken & Brown Rice Recipe Dry Dog Food', '1000', '28'],
 
                 //Food For Cats
 
                 ['2', '55', '', 'ANF Organic 6Free Indoor Kitten', 'anf-organic-6free-indoor-kitten', 'Food Product for kittens aiming for ensuring sufficient nutrition', '530', '11'],
                 ['2', '55', '', 'ROYAL CANIN Oral Care', 'royal-canin-oral-care', 'Food Product for cats aiming for protecting their teeths and ensuring sufficient nutritions', '485', '17'],
 
                 //Food For Fishes
 
                 ['1', '56', '', 'Aquapex Vital Gran', '', 'Food Granules for tropical fish', '108', '22'],
                 ['2', '56', '', 'Hikari Sinking Carnivore Pellet', 'hikari-sinking-carnivore-pellet', 'Food Granules for tropical fish', '252', '33'],        
 
 
         //Cosmetic
 
             //Make Up Tools
 
                 //Massage devices
 
                 ['1', '57', '', 'Queen Crown Japanese Massage Chair QC5S', 'queen-crown-japanese-massage-chair-qc5s', 'Highly recommended massage chair with great technologies from Japan', '13995', '5'],
                 ['2', '57', '', 'Synca Circ Mini Massage Chair', 'synca-circ-mini-massage-chair', 'Mini massage chair of Synca Manufacturer with modern technologies', '30000', '4'],
 
                 //Hair dryers
 
                 ['2', '58', '', 'Nanoe Panasonic Hair Dryer EHNA27PN645', 'nanoe-panasonic-hair-dryer-ehna27pn645', 'Brand new mosture protect Hair Dryer produced by Panasonic Manufacturer', '1870', '13'],
                 ['2', '58', '', 'Phillips Hair Dryer BHC010', 'phillips-hair-dryer-bhc010', 'Brand new Hair Dryer produced by Phillips Manufacturer', '270', '11'],
 
                 //face washing machines
 
                 ['1', '59', '', 'Ultrasonic Face Washing Device Electric', 'ultrasonic-face-washing-device-eletric', 'New Modern facial washing machine with high technologies', '20', '17'],
                 ['1', '59', '', 'CLSEVXY Water Resistant Facial Cleansing ', 'clsevxy-water-resistant-facial-cleansing', 'New Modern facial washing machine with high technologies', '30', '12'],
 
             //Body Care
 
                 //Showers
 
                 ['2', '60', '', 'Love Beauty And Planet Majectic Glow Shower 400ml', 'love-beauty-and-planet-majectic-glow-shower-400ml', 'Great shower with incredible functionalities for your skin', '13', '45'],
                 ['1', '60', '', 'Detox Love Beauty And Planet Pure And Positive Shower 400ml', 'detox-love-beauty-and-planet-pure-and-positive-shower-400ml', 'Great shower with incredible functionalities for your skin', '19', '54'],
 
                 //Sunscreens
 
                 ['1', '61', '', 'Lagivado Korean Sunscreen', 'lagivado-korean-sunscreen', 'One of the most popular sunscreen from Korea with multi-protection features', '25', '40'],
                 ['2', '61', '', ' Senka Perfect UV Essence Sunscreen', 'senka-perfect-uv-essence-sunscreen', 'One of the most popular sunscreen from Japan with anti-aging features', '20', '35'],
 
                 //Deodorants
 
                 ['2', '62', '', 'Romano Classic Deodorant 5oml', 'romano-classic-deodorant-50ml', 'One of the most popular deodorant for men', '9', '67'],
                 ['1', '62', '', 'Nivea Men Deodorant', 'nivea-men-deodorant', 'One of the most popular deodorant for men', '7', '78'],
 
             //Skin Care
 
                 //Lotions
 
                 ['1', '63', '', 'Avene Eau Thermale Cicalfate Lotion 15ml', 'avene-eau-thermale-cicalfate-lotion-15ml', 'One of the most popular lotion for women', '277', '38'],
                 ['2', '63', '', 'Madagascar Centella Ampoule Lotion 55ml', 'madagascar-centella-ampoule-lotion-55ml', 'One of the most popular lotion for women', '17', '23'],
 
                 //Serums
 
                 ['2', '64', '', 'Senka White Beauty Serum', 'senka-white-beauty-serum', 'Considering one of the most effective serum for Women', '185', '20'],
                 ['2', '64', '', 'Da Balance Vitamin C Brightening Serum', 'da-balance-vitamin-c-brightening-serum', 'Considering one of the most effective serum for Women', '139', '17'],
 
                 //Cleansers
 
                 ['1', '65', '', 'Senka Perfect Whip Acne Care 100g', 'senka-perfect-whip-acne-care-100g', 'A very well-known cleanser with fascinating functionalities recently', '75', '26'],
                 ['1', '65', '', 'Cerave Foaming Facial Cleanser', 'cerave-foaming-facial-cleanser', 'A very well-known cleanser with fascinating functionalities recently', '419', '6'],

      ],
    );
  }
}
