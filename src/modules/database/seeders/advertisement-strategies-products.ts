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
      ['strategyId', 'productId', 'percent', 'amount'],
      // Inserted data

      //iphone
      [['1', '1', '15', '30'],
      ['1', '2', '15', '30'],
      ['1', '3', '15', '30'],
      ['1', '4', '15', '30'],
      ['1', '5', '15', '30'],
      ['1', '6', '15', '30'],
    
      //TV and Fridge
      ['2', '19', '25', '50'],
      ['2', '20', '25', '50'],
      ['2', '21', '25', '50'],
      ['2', '22', '25', '50'],
      ['2', '23', '25', '50'],
      ['2', '24', '25', '50'],

      ['2', '31', '25', '50'],
      ['2', '32', '25', '50'],
      ['2', '33', '25', '50'],
      ['2', '34', '25', '50'],
      ['2', '35', '25', '50'],
      ['2', '36', '25', '50'],

      //Samsung Smart Phone
      ['3', '7', '20', '20'],
      ['3', '8', '20', '20'],
      ['3', '9', '20', '20'],
      ['3', '10', '20', '20'],
      ['3', '11', '20', '20'],
      ['3', '12', '20', '20'],
    ],
    );
  }
}
