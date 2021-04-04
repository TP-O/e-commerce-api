import { Database } from '@database/core/database';
import { Seeder } from '@database/core/seeder';

class RolesUsersSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'roles_users';

  /**
   * Insert data to table.
   */
  protected async run() {
    await Database.table('roles_users').insert(
      // Column names
      ['user_id', 'role_id'],
      // Inserted data
      [
        ['1', '3'],
        ['2', '3'],
        ['3', '4'],
      ],
    );
  }
}

export default new RolesUsersSeeder();
