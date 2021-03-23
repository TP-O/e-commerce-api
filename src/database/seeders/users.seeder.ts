import { Database } from 'database/core/database';
import { Seeder } from 'database/core/seeder';

class UsersSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'users';

  /**
   * Insert data to table.
   */
  protected async run() {
    await Database.table('users').insert(
      // Column names
      ['name', 'password'],
      // Inserted data
      [
        ['Phong', '2012'],
        ['TP-O', '2001'],
        ['TP2012', '1111'],
        ['Unknown', '0000'],
      ],
    );
  }
}

export default new UsersSeeder();
