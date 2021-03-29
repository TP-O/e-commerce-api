import { Database } from '@database/core/database';
import { Seeder } from '@database/core/seeder';

class Permission_userSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'permission_user';

  /**
   * Insert data to table.
   */
  protected async run() {
    await Database.table('permission_user').insert(
      // Column names
      ['user_id', 'permission_id'],
      // Inserted data
      [],
    );
  }
}

export default new Permission_userSeeder();
