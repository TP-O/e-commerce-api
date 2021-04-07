import { Database } from '@modules/database/core/database';
import { Seeder } from '@modules/database/core/seeder';

class AdminsRolesSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'admins_roles';

  /**
   * Insert data to table.
   */
  protected async run() {
    await Database.table('admins_roles').insert(
      // Column names
      ['admin_id', 'role_id'],
      // Inserted data
      [
        ['1', '1'],
        ['2', '2'],
        ['3', '2'],
      ],
    );
  }
}

export default new AdminsRolesSeeder();
