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
        ['administrator', 'admin'],
        ['moderator', 'admin'],
        ['normal user', 'user'],
        ['VIP user', 'user'],
        ['individual', 'seller'],
        ['company', 'seller'],
      ],
    );
  }
}

export default new RolesSeeder();
