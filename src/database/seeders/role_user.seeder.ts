import { Database } from 'database/core/database';
import { Seeder } from 'database/core/seeder';

class Role_userSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'role_user';

  /**
   * Insert data to table.
   */
  protected async run() {
    await Database.table('role_user').insert(
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

export default new Role_userSeeder();
