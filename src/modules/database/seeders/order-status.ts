import { Seeder } from '@modules/database/core/seeder';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class OrderStatusSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'order_status';

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
    await this.database.table('order_status').insert(
      // Column names
      ['name'],
      // Inserted data
      [
        [
          'Processing',
        ],
        [
          'Delivering',
        ],
        [
          'Received',
        ],
      ],
    );
  }
}
