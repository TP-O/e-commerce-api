import { Database } from '@database/core/database';
import { Seeder } from '@database/core/seeder';

class RolesSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'roles';

  /**
   * Insert data to table.
   */
  protected async run() {
    await Database.table('roles').insert(
      // Column names
      ['name', 'type'],
      // Inserted data
      [
        ['Administrator', 'admin'],
        ['Moderator', 'admin'],
        ['Normal User', 'user'],
        ['VIP User', 'user'],
        ['Normal Seller', 'seller'],
        ['VIP Seller', 'seller'],
      ],
    );
  }
}

export default new RolesSeeder();
