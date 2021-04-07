import bcrypt from 'bcrypt';
import { Database } from '@modules/database/core/database';
import { Seeder } from '@modules/database/core/seeder';

class SellersSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'sellers';

  /**
   * Insert data to table.
   */
  protected async run() {
    await Database.table('sellers').insert(
      // Column names
      ['name', 'email', 'password'],
      // Inserted data
      [
        [
          'Salesman 01',
          'salesman01@gmail.com',
          bcrypt.hashSync('00001', 10),
        ],
        [
          'Salesman 02',
          'salesman02@gmail.com',
          bcrypt.hashSync('00002', 10),
        ],
      ],
    );
  }
}

export default new SellersSeeder();
