import { Seeder } from '@modules/database/core/seeder';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class AdminsRolesSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'admins_roles';

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
    await this.database.table('admins_roles').insert(
      // Column names
      ['admin_id', 'role_id'],
      // Inserted data
      [
        ['1', '1'],
        ['2', '2'],
        ['3', '2'],
      ],
    );
  }
}
