import { Database } from '@modules/database/core/database';
import { Seeder } from '@modules/database/core/seeder';

class PermissionsRolesSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'permissions_roles';

  /**
   * Insert data to table.
   */
  protected async run() {
    await Database.table('permissions_roles').insert(
      // Column names
      ['role_id', 'permission_id'],
      // Inserted data
      [
        ['1', '1'],
        ['1', '2'],
        ['1', '3'],
        ['1', '4'],
        ['1', '5'],
        ['1', '6'],
        ['1', '7'],
        ['1', '8'],
        ['1', '9'],
        ['1', '10'],
        ['1', '11'],
        ['1', '12'],
        ['2', '5'],
        ['2', '9'],
        ['2', '10'],
        ['2', '11'],
        ['2', '12'],
      ],
    );
  }
}

export default new PermissionsRolesSeeder();
