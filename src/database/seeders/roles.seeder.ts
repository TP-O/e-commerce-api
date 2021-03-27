import { Database } from 'database/core/database';
import { Seeder } from 'database/core/seeder';

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
      ['name'],
      // Inserted data
      [['admin'], ['normal user'], ['VIP user'], ['moderator']],
    );
  }
}

export default new RolesSeeder();
