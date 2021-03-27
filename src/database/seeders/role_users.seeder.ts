import { Database } from 'database/core/database';
import { Seeder } from 'database/core/seeder';

class Role_usersSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'role_users';

  /**
   * Insert data to table.
   */
  protected async run() {
    await Database.table('role_users').insert(
      // Column names
      ['role_id', 'user_id'],
      // Inserted data
      [
        ['2', '1'],
        ['1', '3'],
        ['3', '4'],
        ['1', '2'],
      ],
    );
  }
}

export default new Role_usersSeeder();
