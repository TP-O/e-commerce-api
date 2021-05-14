import { Seeder } from '@modules/database/core/seeder';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class AdvertisementStrategiesProductsSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'advertisement_strategies_products';

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
    await this.database.table('advertisement_strategies_products').insert(
      // Column names
      ['strategyId', 'productId','quantity', 'percent'],
      // Inserted data

      //iphone
      [['1', '1', '2', '15'],
      ['1', '2', '2', '15'],
      ['1', '3', '2', '15'],
      ['1', '4', '2', '15'],
      ['1', '5', '2', '15'],
      ['1', '6', '2', '15'],
    
      //TV
      ['2', '19', '2', '25'],
      ['2', '20', '2', '25'],
      ['2', '21', '2', '25'],
      ['2', '22', '2', '25'],
      ['2', '23', '2', '25'],
      ['2', '24', '2', '25'],

      //fridge
      ['3', '31', '2', '25'],
      ['3', '32', '2', '25'],
      ['3', '33', '2', '25'],
      ['3', '34', '2', '25'],
      ['3', '35', '2', '25'],
      ['3', '36', '2', '25'],

      //Samsung Smart Phone
      ['4', '7', '2', '20'],
      ['4', '8', '2', '20'],
      ['4', '9', '2', '20'],
      ['4', '10', '2', '20'],
      ['4', '11', '2', '20'],
      ['4', '12', '2', '20'],
    ],
    );
  }
}
