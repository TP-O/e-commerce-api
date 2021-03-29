import { Database } from '@database/core/database';
import { Seeder } from '@database/core/seeder';

class XXXSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'xxx';

  /**
   * Insert data to table.
   */
  protected async run() {
    await Database.table('xxx').insert(
      // Column names
      [],
      // Inserted data
      [],
    );
  }
}

export default new XXXSeeder();
