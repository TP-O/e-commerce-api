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
      ['name', 'email', 'password'],
      // Inserted data
      [
        ['Seller 01', 'seller01@gmail.com', bcrypt.hashSync('00001', 10)],
        ['Seller 02', 'seller02@gmail.com', bcrypt.hashSync('00002', 10)],
      ],
    );
  }
}
