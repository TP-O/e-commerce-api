import { Database } from '@database/core/database';
import { Seeder } from '@database/core/seeder';

class Admin_roleSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'admin_role';

  /**
   * Insert data to table.
   */
  protected async run() {
    await Database.table('admin_role').insert(
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

export default new Admin_roleSeeder();
