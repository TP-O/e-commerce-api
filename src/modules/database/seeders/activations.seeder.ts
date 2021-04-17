import { Database } from '@modules/database/core/database';
import { Seeder } from '@modules/database/core/seeder';

class ActivationsSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'activations';

  /**
   * Insert data to table.
   */
  protected async run() {
    await Database.table('activations').insert(
      // Column names
      ['account_id', 'code', 'type'],
      // Inserted data
      [
        ['1', 'fjMHkkmmwHxMvFi6WPRgSeBpP', 'admin'],
        ['1', 'wrErCnlr6gwS0jp31BXMeGnqE', 'user'],
        ['1', 'DJiFLnXzIk5WNHvk3tXhF5D6n', 'seller'],
      ],
    );
  }
}

export default new ActivationsSeeder();
