import bcrypt from 'bcryptjs';
import { Seeder } from '@modules/database/core/seeder';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class UsersSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'users';

  /**
   * Constructor.
   *
   * @param database database instance.
   */
  public constructor(protected database: Database) {
    super(database);
  }

  /**
   * Insert data to table.
   */
  protected async run() {
    await this.database.table('users').insert(
      // Column names
      ['name', 'email', 'password'],
      // Inserted data
      [
        ['User 01', 'user01@gmail.com', bcrypt.hashSync('00001', 10)],
        ['User 02', 'user02@gmail.com', bcrypt.hashSync('00002', 10)],
        ['User 03', 'user03@gmail.com', bcrypt.hashSync('00003', 10)],
      ],
    );
  }
}
