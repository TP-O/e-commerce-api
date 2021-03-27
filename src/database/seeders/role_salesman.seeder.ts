import { Database } from 'database/core/database';
import { Seeder } from 'database/core/seeder';

class Salesman_roleSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'role_salesman';

  /**
   * Insert data to table.
   */
  protected async run() {
    await Database.table('role_salesman').insert(
      // Column names
      ['salesman_id', 'role_id'],
      // Inserted data
      [
        ['1', '5'],
        ['2', '6'],
      ],
    );
  }
}

export default new Salesman_roleSeeder();
