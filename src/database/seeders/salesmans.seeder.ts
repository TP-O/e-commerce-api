import { Database } from '@database/core/database';
import { Seeder } from '@database/core/seeder';

class SalesmansSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'salesmans';

  /**
   * Insert data to table.
   */
  protected async run() {
    await Database.table('salesmans').insert(
      // Column names
      ['name', 'email', 'password'],
      // Inserted data
      [
        ['Salesman 01', 'salesman01@gmail.com', '0001'],
        ['Salesman 02', 'salesman02@gmail.com', '0002'],
      ],
    );
  }
}

export default new SalesmansSeeder();
