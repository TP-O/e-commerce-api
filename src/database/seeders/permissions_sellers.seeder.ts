import { Database } from '@database/core/database';
import { Seeder } from '@database/core/seeder';

class PermissionsSellersSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'permissions_sellers';

  /**
   * Insert data to table.
   */
  protected async run() {
    await Database.table('permissions_sellers').insert(
      // Column names
      [],
      // Inserted data
      [],
    );
  }
}

export default new PermissionsSellersSeeder();
