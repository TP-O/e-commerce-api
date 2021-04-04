import { Database } from '@database/core/database';
import { Seeder } from '@database/core/seeder';

class RolesSellersSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'roles_sellers';

  /**
   * Insert data to table.
   */
  protected async run() {
    await Database.table('roles_sellers').insert(
      // Column names
      ['seller_id', 'role_id'],
      // Inserted data
      [
        ['1', '5'],
        ['2', '6'],
      ],
    );
  }
}

export default new RolesSellersSeeder();
