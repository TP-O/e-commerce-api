import { Database } from 'database/core/database';
import { Seeder } from 'database/core/seeder';

class Permission_salesmanSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'permission_salesman';

  /**
   * Insert data to table.
   */
  protected async run() {
    await Database.table('permission_salesman').insert(
      // Column names
      [],
      // Inserted data
      [],
    );
  }
}

export default new Permission_salesmanSeeder();
