import { Seeder } from '@modules/database/core/seeder';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class SellerRolesSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'seller_roles';

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
    await this.database.table('seller_roles').insert(
      // Column names
      ['name'],
      // Inserted data
      [['individual'], ['company']],
    );
  }
}
