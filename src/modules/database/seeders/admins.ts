import bcrypt from 'bcryptjs';
import { Seeder } from '@modules/database/core/seeder';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class AdminsSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'admins';

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
    await this.database.table('admins').insert(
      // Column names
      ['roleId', 'firstName', 'lastName', 'email', 'password'],
      // Inserted data
      [
        ['1', 'Admin', '01', 'admin01@gmail.com', bcrypt.hashSync('00001', 10)],
        ['2', 'Moderator', '01', 'moderator01@gmail.com', bcrypt.hashSync('00001', 10)],
        ['2', 'Moderator', '02', 'moderator02@gmail.com', bcrypt.hashSync('00002', 10)],
      ],
    );
  }
}
