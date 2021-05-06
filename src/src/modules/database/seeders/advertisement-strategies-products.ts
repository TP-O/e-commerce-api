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
    
      //TV
      ['2', '19', '25', '50'],
      ['2', '20', '25', '50'],
      ['2', '21', '25', '50'],
      ['2', '22', '25', '50'],
      ['2', '23', '25', '50'],
      ['2', '24', '25', '50'],

      //fridge
      ['3', '31', '25', '50'],
      ['3', '32', '25', '50'],
      ['3', '33', '25', '50'],
      ['3', '34', '25', '50'],
      ['3', '35', '25', '50'],
      ['3', '36', '25', '50'],

      //Samsung Smart Phone
      ['4', '7', '20', '20'],
      ['4', '8', '20', '20'],
      ['4', '9', '20', '20'],
      ['4', '10', '20', '20'],
      ['4', '11', '20', '20'],
      ['4', '12', '20', '20'],
    ],
    );
  }
}
