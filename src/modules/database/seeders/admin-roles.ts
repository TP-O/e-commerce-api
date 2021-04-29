import { Seeder } from '@modules/database/core/seeder';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class AdminRolesSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'admin_roles';

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
    await this.database.table('admin_roles').insert(
      // Column names
      ['name'],
      // Inserted data
      [['administrator'], ['moderator']],
    );
  }
}
