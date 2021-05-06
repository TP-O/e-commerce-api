import { Seeder } from '@modules/database/core/seeder';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class ProductCategoriesSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'product_categories';

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
    await this.database.table('product_categories').insert(
      // Column names
      ['level', 'left', 'right', 'name', 'slug', 'description'],
      // Inserted data
      [
        //level 1
        ['1', '1', '30','Smart Phone', 'smart-phone', 'Smart phone produced by many Manufacturer'],
        ['1', '31', '60','Electronic Devices', 'electronic-devices', 'Electronic Devices'],
        ['1', '61', '90','House Tools', 'house-tools', 'house tools for family'],
        ['1', '91', '120','Food Products', 'food-products', 'foods, beverages'],
        ['1', '121', '149','Cosmetic', 'cosmetic', 'cosmetic products to take care of the beauty'],
      ],
    );

    await this.database.table('product_categories').insert(
      // Column names
      ['level', 'left', 'right', 'name', 'slug', 'description'],
      // Inserted data   
      [
        //level 2
        ['2', '2', '10', 'Iphone', 'iphone', 'Apple manufacturer'], //6
        ['2', '11', '20', 'Samsung', 'samsung', 'Samsung manufacturer'],
        ['2', '21', '29', 'Xiaomi', 'xiaomi', 'Xiaomi manufacturer'],

        ['2', '32', '40', 'TV', 'tv', 'television'],
        ['2', '41', '50', 'Air Conditioner', 'air-conditioner', 'Air Conditioner'],
        ['2', '51', '59', 'Fridge', 'fridge', 'fridge'], //11

        ['2', '62', '70', 'Cooking Tools', 'cooking-tools', 'cooking tools for family'],
        ['2', '71', '80', 'Lighting devices', 'lighting-devices', 'lighting devices'],
        ['2', '81', '89', 'Furniture', 'furniture', 'Furniture'],

        ['2', '92', '100', 'Beverages', 'beverages', 'Beverages'],
        ['2', '101', '110', 'Foods', 'foods', 'Foods'], //16
        ['2', '111', '119', 'Pet Foods', 'pet-foods', 'Pet Foods'],

        ['2', '122', '130', 'Make Up Tools', 'make-up-tools', 'make up for female'],
        ['2', '131', '140', 'Body Care', 'body-care', 'body care'],
        ['2', '141', '149', 'Skin Care', 'skin-care', 'skin care'],

        //level 3
        ['3', '3', '4', 'Iphone 12', 'iphone-12', 'Apple manufacturer'], //21
        ['3', '5', '7', 'Iphone 12 pro', 'iphone-12-pro', 'Apple manufacturer'],
        ['3', '8', '9', 'Iphone 13', 'iphone-13', 'Apple manufacturer'],

        ['3', '12', '13', 'Samsung Galaxy S20 Plus', 'samsung-galaxy-s20-plus', 'Samsung manufacturer'],
        ['3', '14', '16', 'Samsung Galaxy A51', 'samsung-galaxy-a51', 'Samsung manufacturer'],
        ['3', '17', '19', 'Samsung Galaxy M11', 'samsung-galaxy-m11', 'Samsung manufacturer'], //26

        ['3', '22', '23', 'Xiaomi redmi 8', 'xiaomi-redmi-8', 'Xiaomi manufacturer'],
        ['3', '24', '26', 'Xiaomi redmi note 10','xiaomi-redmi-note-10','Xiaomi manufacturer'],
        ['3', '27', '28', 'Xiaomi POCO M3', 'xiaomi-poco-m3', 'Xiaomi manufacturer'],

        ['3', '33', '34', 'TV OLED', 'tv-oled', 'TV OLED'],
        ['3', '35', '37', 'TV QLED', 'tv-qled', 'TV QLED'], //31
        ['3', '38', '39', 'TV 4K ', 'tv-4k', 'TV 4K'],

        ['3', '42', '43', 'Best Seller Air Conditioner', 'best-seller-air-conditioner', 'Best Seller Air Conditioner'],
        ['3', '44', '46','New Air Conditoner 2021','new-air-conditoner-2021','New Air Conditoner 2021'],
        ['3', '47', '49','Inverter Air Conditioner ','inverter-air-conditioner','Inverter Air Conditioner'],

        ['3', '52', '53', 'Best Seller Frigde', 'best-seller-fridge', 'Best Seller Frigde'], //36
        ['3', '54', '56', 'New Fridge 2021', 'new-fridge-2021', 'New Frigde 2021'],
        ['3', '57', '58', 'Inverter Frigde ', 'inverter-fridge', 'Inverter Frigde'],

        ['3', '63', '64', 'Cooker', 'cooker', 'Cooker'],
        ['3', '65', '67', 'Bowls and Dishes', 'bowls-and-dishes', 'Bowls and Dishes'],
        ['3', '68', '69', 'Glasses', 'glasses', 'Glasses'], //41

        ['3', '72', '73', 'Study Lamps', 'study-lamps', 'Study Lamps'],
        ['3', '74', '76', 'Light Bulbs', 'light-bulbs', 'Light Bulbs'],
        ['3', '77', '79', 'Bedside Lamps', 'bedside-lamps', 'Bedside Lamps'],

        ['3', '82', '83', 'Bed', 'bed', 'Bed'],
        ['3', '84', '86', 'Wardrobe', 'wardrobe', 'Wardrobe'], //46
        ['3', '87', '88', 'Kettle', 'kettle', 'Kettle'],

        ['3', '93', '94', 'Tiger', 'tiger', 'Tiger'],
        ['3', '95', '97', 'Budweiser', 'budweiser', 'Budweiser'],
        ['3', '98', '99', 'Heineken', 'heineken', 'heineken'],

        ['3', '102', '103', 'Junk Foods', 'junk-foods', 'Junk Foods'], //51
        ['3', '104', '106', 'Functional Foods', 'functional-foods', 'Functional Foods'],
        ['3', '107', '109', 'Organic Foods', 'organic-foods', 'Organic Foods'],

        ['3', '112', '113', 'Food For Dogs', 'food-for-dogs', 'Food for dogs'],
        ['3', '114', '116', 'Food For Cats', 'food-for-cats', 'Food For Cats'],
        ['3', '117', '118', 'Food For Fishes', 'food-for-fishes', 'Food For Fishes'], //56

        ['3', '123', '124', 'Massage Devices', 'massage-devices', 'Massage Devices'],
        ['3', '125', '127', 'Hair Dryer', 'hair-dryer', 'Hair Dryer'],
        ['3', '128', '129','Face Washing Machine','face-washing-machine','Face Washing Machine'],

        ['3', '132', '133', ' Shower', 'shower', 'Shower'],
        ['3', '134', '136', 'Sunscreen', 'sunscreen', 'Sunscreen'], //61
        ['3', '137', '139', 'Deodorant', 'deodorant', 'Deodorant'],

        ['3', '142', '143', ' Lotion', 'lotion', 'Lotion'],
        ['3', '144', '146', 'Serum', 'serum', 'Serum'],
        ['3', '147', '148', 'Cleanser', 'cleanser', 'Cleanser'], //65

        //level 0(root)
        ['0', '0', '150', 'root', 'root', 'no description'],
      ],
    );
  }
}
