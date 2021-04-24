import { Seeder } from '@modules/database/core/seeder';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class ActivationsSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'activations';

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
    await this.database.table('activations').insert(
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
