import { Database } from '@database/core/database';
import { Seeder } from '@database/core/seeder';

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
      ['name', 'email', 'password'],
      // Inserted data
      [
        ['User 01', 'user01@gmail.com', '0001'],
        ['User 02', 'user02@gmail.com', '0002'],
        ['User 03', 'user03@gmail.com', '0003'],
      ],
    );
  }
}

export default new UsersSeeder();
