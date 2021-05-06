import { Seeder } from '@modules/database/core/seeder';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class XXXSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'xxx';

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
    await this.database.table('xxx').insert(
      // Column names
      [],
      // Inserted data
      [],
    );
  }
}
