import { Seeder } from '@modules/database/core/seeder';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class AddressTypesSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'address_types';

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
    await this.database.table('address_types').insert(
      // Column names
      ['name'],
      // Inserted data
      [
        [
          'Home Address',
        ],
        [
          'Business Address',
        ],
      ],
    );
  }
}
