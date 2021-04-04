import { Database } from '@database/core/database';
import { Seeder } from '@database/core/seeder';

class PermissionsUsersSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'permissions_users';

  /**
   * Insert data to table.
   */
  protected async run() {
    await Database.table('permissions_users').insert(
      // Column names
      ['user_id', 'permission_id'],
      // Inserted data
      [],
    );
  }
}

export default new PermissionsUsersSeeder();
