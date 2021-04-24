import { Seeder } from '@modules/database/core/seeder';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class PermissionsRolesSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'permissions_roles';

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
    await this.database.table('permissions_roles').insert(
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
