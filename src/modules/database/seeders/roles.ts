import { Seeder } from '@modules/database/core/seeder';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class RolesSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'roles';

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
    await this.database.table('roles').insert(
      // Column names
      ['name', 'type'],
      // Inserted data
      [
        ['administrator', 'admin'],
        ['moderator', 'admin'],
        ['normal user', 'user'],
        ['VIP user', 'user'],
        ['individual', 'seller'],
        ['company', 'seller'],
      ],
    );
  }
}
