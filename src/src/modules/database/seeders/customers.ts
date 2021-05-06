import bcrypt from 'bcryptjs';
import { Seeder } from '@modules/database/core/seeder';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class CustomersSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'customers';

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
    await this.database.table('customers').insert(
      // Column names
      ['roleId', 'firstName', 'lastName', 'email', 'password'],
      // Inserted data
      [
        [
          '1',
          'Customer',
          '01',
          'customer01@gmail.com',
          bcrypt.hashSync('00001', 10),
        ],
        [
          '1',
          'Customer',
          '02',
          'customer02@gmail.com',
          bcrypt.hashSync('00002', 10),
        ],
        [
          '2',
          'Customer',
          '03',
          'customer03@gmail.com',
          bcrypt.hashSync('00003', 10),
        ],
      ],
    );
  }
}
