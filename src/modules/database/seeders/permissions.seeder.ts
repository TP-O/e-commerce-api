import { Database } from '@modules/database/core/database';
import { Seeder } from '@modules/database/core/seeder';

class PermissionsSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'permissions';

  /**
   * Insert data to table.
   */
  protected async run() {
    await Database.table('permissions').insert(
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

export default new PermissionsSeeder();
