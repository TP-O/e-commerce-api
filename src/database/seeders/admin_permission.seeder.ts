import { Database } from '@database/core/database';
import { Seeder } from '@database/core/seeder';

class Admin_permissionSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'admin_permission';

  /**
   * Insert data to table.
   */
  protected async run() {
    await Database.table('admin_permission').insert(
      // Column names
      ['admin_id', 'permission_id'],
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
        ['3', '5'],
        ['3', '9'],
        ['3', '10'],
        ['3', '11'],
        ['3', '12'],
      ],
    );
  }
}

export default new Admin_permissionSeeder();
