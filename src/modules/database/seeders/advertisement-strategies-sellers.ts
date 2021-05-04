import { Seeder } from '@modules/database/core/seeder';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class AdvertisementStrategiesSellersSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'advertisement_strategies_sellers';

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
    await this.database.table('advertisement_strategies_sellers').insert(
      // Column names
      ['strategyId', 'sellerId'],
      // Inserted data
      [['1', '1'],
      ['2', '1'],
      ['2', '2'],
      ['3', '2']],
    );
  }
}
