import { Database } from 'database/core/database';
import { Seeder } from 'database/core/seeder';

class ProductsSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'products';

  /**
   * Insert data to table.
   */
  protected async run() {
    await Database.table('products').insert(
      // Column names
      ['user_id', 'name', 'price'],
      // Inserted data
      [
        ['1', 'P01', '2000'],
        ['4', 'P02', '2500'],
        ['2', 'P03', '22500'],
        ['1', 'P04', '500'],
        ['1', 'P05', '200'],
        ['3', 'P06', '7000'],
        ['2', 'P07', '1200'],
        ['1', 'P08', '5500'],
        ['4', 'P09', '550'],
      ],
    );
  }
}

export default new ProductsSeeder();
