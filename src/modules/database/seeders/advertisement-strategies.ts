import { Seeder } from '@modules/database/core/seeder';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class AdvertisementStrategiesSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'advertisement_strategies';

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
    await this.database.table('advertisement_strategies').insert(
      // Column names
      ['categoryId', 'typeId', 'name','slug', 'min', 'max', 'startOn', 'endOn'],
      // Inserted data
      [['6', '1', 'Sale Off For All Iphone', 'sale-off-for-all-iphone', '10', '20', '2021-06-01 00:00:00', '2021-07-01 00:00:00'], //YYYY-MM-DD HH:MM:SS
      ['9','2', 'Sale Off For TV', 'sale-off-for-tv', '20', '30', '2021-05-13 00:00:00', '2021-05-25 00:00:00'],
      ['11','2', 'Sale Off For Fridge', 'sale-off-for-fridge', '20', '30', '2021-05-12 00:00:00', '2021-06-25 00:00:00'],
      ['7','3', 'Sale Off For All Samsung Smart Phone', 'sale-off-for-all-samsung-smart-phone', '15', '25', '2021-06-20 00:00:00', '2021-06-27 00:00:00'],
      ],
    );
  }
}
