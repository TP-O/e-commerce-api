import { Database } from '@database/core/database';
import { Seeder } from '@database/core/seeder';

class AdminsSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'admins';

  /**
   * Insert data to table.
   */
  protected async run() {
    await Database.table('admins').insert(
      // Column names
      ['name', 'email', 'password'],
      // Inserted data
      [
        ['Admin 01', 'admin01@gmail.com', '0001'],
        ['Moderator 01', 'moderator01@gmail.com', '0001'],
        ['Moderator 02', 'moderator02@gmail.com', '0002'],
      ],
    );
  }
}

export default new AdminsSeeder();
