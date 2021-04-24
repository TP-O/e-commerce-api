import { Seeder } from '@modules/database/core/seeder';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class RolesSellersSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'roles_sellers';

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
    await this.database.table('roles_sellers').insert(
      // Column names
      ['seller_id', 'role_id'],
      // Inserted data
      [
        ['1', '5'],
        ['2', '6'],
      ],
    );
  }
}
