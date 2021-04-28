import bcrypt from 'bcryptjs';
import { Seeder } from '@modules/database/core/seeder';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class SellersSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'sellers';

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
    await this.database.table('sellers').insert(
      // Column names
      ['roleId', 'storeName', 'email', 'password'],
      // Inserted data
      [
        ['1', 'Store A', 'seller01@gmail.com', bcrypt.hashSync('00001', 10)],
        ['2', 'Store B', 'seller02@gmail.com', bcrypt.hashSync('00002', 10)],
      ],
    );
  }
}
