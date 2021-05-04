import { Seeder } from '@modules/database/core/seeder';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class AdvertisementTypesSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'advertisement_types';

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
    await this.database.table('advertisement_types').insert(
      // Column names
      ['name'],
      // Inserted data
      [['pop-up'],
       ['in-line'],
       ['banner']],
    );
  }
}
