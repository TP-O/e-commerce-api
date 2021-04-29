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
      ['parentId', 'name', 'slug', 'description'],
      // Inserted data
      [
        ['null', 'Smart Phone', 'smart-phone', 'Smart phone produced by many Manufacturer',],
        [
          'null',
          'Electronic Devices',
          'electronic-devices',
          'Electronic Devices',
        ],
        ['null', 'House Tools', 'house-tools', 'house tools for family'],
        ['null', 'Food Products', 'food-products', 'foods, beverages'],
        [
          'null',
          'Cosmetic',
          'cosmetic',
          'cosmetic products to take care of the beauty',
        ],

        ['1', 'Iphone', 'iphone', 'Apple manufacturer'], //6
        ['1', 'Samsung', 'samsung', 'Samsung manufacturer'],
        ['1', 'Xiaomi', 'xiaomi', 'Xiaomi manufacturer'],

        ['2', 'TV', 'tv', 'television'],
        ['2', 'Air Conditioner', 'air-conditioner', 'Air Conditioner'],
        ['2', 'Fridge', 'fridge', 'fridge'], //11

        ['3', 'Cooking Tools', 'cooking-tools', 'cooking tools for family'],
        ['3', 'Lighting devices', 'lighting-devices', 'lighting devices'],
        ['3', 'Furniture', 'furniture', 'Furniture'],

        ['4', 'Beverages', 'beverages', 'Beverages'],
        ['4', 'Foods', 'foods', 'Foods'], //16
        ['4', 'Pet Foods', 'pet-foods', 'Pet Foods'],

        ['5', 'Make Up Tools', 'make-up-tools', 'make up for female'],
        ['5', 'Body Care', 'body-care', 'body care'],
        ['5', 'Skin Care', 'skin-care', 'skin care'],

        ['6', 'Iphone 12', 'iphone-12', 'Apple manufacturer'], //21
        ['6', 'Iphone 12 pro', 'iphone-12-pro', 'Apple manufacturer'], 
        ['6', 'Iphone 13', 'iphone-13', 'Apple manufacturer'],

        ['7', 'Samsung Galaxy S20 Plus', 'samsung-galaxy-s20-plus', 'Samsung manufacturer'],
        ['7', 'Samsung Galaxy A51', 'samsung-galaxy-a51', 'Samsung manufacturer'],
        ['7', 'Samsung Galaxy M11', 'samsung-galaxy-m11', 'Samsung manufacturer'], //26

        ['8', 'Xiaomi redmi 8', 'xiaomi-redmi-8', 'Xiaomi manufacturer'],
        ['8', 'Xiaomi redmi note 10','xiaomi-redmi-note-10','Xiaomi manufacturer'],
        ['8', 'Xiaomi POCO M3', 'xiaomi-poco-m3', 'Xiaomi manufacturer'],

        ['9', 'TV OLED', 'tv-oled', 'TV OLED'],
        ['9', 'TV QLED', 'tv-qled', 'TV QLED'], //31
        ['9', 'TV 4K ', 'tv-4k', 'TV 4K'],

        ['10', 'Best Seller Air Conditioner', 'best-seller-air-conditioner', 'Best Seller Air Conditioner'],
        ['10','New Air Conditoner 2021','new-air-conditoner-2021','New Air Conditoner 2021'],
        ['10','Inverter Air Conditioner ','inverter-air-conditioner','Inverter Air Conditioner'],

        ['11', 'Best Seller Frigde', 'best-seller-fridge', 'Best Seller Frigde'], //36
        ['11', 'New Fridge 2021', 'new-fridge-2021', 'New Frigde 2021'],
        ['11', 'Inverter Frigde ', 'inverter-fridge', 'Inverter Frigde'],

        ['12', 'Cooker', 'cooker', 'Cooker'],
        ['12', 'Bowls and Dishes', 'bowls-and-dishes', 'Bowls and Dishes'],
        ['12', 'Glasses', 'glasses', 'Glasses'], //41

        ['13', 'Study Lamps', 'study-lamps', 'Study Lamps'],
        ['13', 'Light Bulbs', 'light-bulbs', 'Light Bulbs'],
        ['13', 'Bedside Lamps', 'bedside-lamps', 'Bedside Lamps'],

        ['14', 'Bed', 'bed', 'Bed'],
        ['14', 'Wardrobe', 'wardrobe', 'Wardrobe'], //46
        ['14', 'Kettle', 'kettle', 'Kettle'],

        ['15', 'Tiger', 'tiger', 'Tiger'],
        ['15', 'Budweiser', 'budweiser', 'Budweiser'],
        ['15', 'Heineken', 'heineken', 'heineken'],

        ['16', 'Junk Foods', 'junk-foods', 'Junk Foods'], //51
        ['16', 'Functional Foods', 'functional-foods', 'Functional Foods'],
        ['16', 'Organic Foods', 'organic-foods', 'Organic Foods'],

        ['17', 'Food For Dogs', 'food-for-dogs', 'Food for dogs'],
        ['17', 'Food For Cats', 'food-for-cats', 'Food For Cats'],
        ['17', 'Food For Fishes', 'food-for-fishes', 'Food For Fishes'], //56

        ['18', 'Massage Devices', 'massage-devices', 'Massage Devices'],
        ['18', 'Hair Dryer', 'hair-dryer', 'Hair Dryer'],
        ['18','Face Washing Machine','face-washing-machine','Face Washing Machine'],

        ['19', ' Shower', 'shower', 'Shower'],
        ['19', 'Sunscreen', 'sunscreen', 'Sunscreen'], //61
        ['19', 'Deodorant', 'deodorant', 'Deodorant'],

        ['20', ' Lotion', 'lotion', 'Lotion'],
        ['20', 'Serum', 'serum', 'Serum'],
        ['20', 'Cleanser', 'cleanser', 'Cleanser'], //65
      ],
    );
  }
}
