import { Seeder } from '@modules/database/core/seeder';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class PermissionsSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'permissions';

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
    await this.database.table('permissions').insert(
      // Column names
      ['name'],
      // Inserted data
      [
        ['view_administrator'],
        ['add_administrator'],
        ['update_administrator'],
        ['delete_administrator'],
        ['view_moderator'],
        ['add_moderator'],
        ['update_moderator'],
        ['delete_moderator'],
        ['view_user'],
        ['add_user'],
        ['update_user'],
        ['delete_user'],
      ],
    );
  }
}
