import { basename } from 'path';
import { Database } from 'database/core/database';
import { Migration } from 'database/core/migration';
import { DataType } from 'database/core/builder/types/data.type';

export class CreateRole_usersTable extends Migration {
  /**
   * Name of the table will be created.
   */
  protected table = 'role_users';

  /**
   * Name of migration.
   */
  protected migrationName = basename(__filename).split('.')[0];

  protected async up() {
    await Database.create(
      'role_users',
      // Columns
      {
        id: {
          type: DataType.bigInt(),
          unsigned: true,
          increment: true,
          required: true,
        },
        role_id: {
          type: DataType.bigInt(),
          unsigned: true,
          required: true,
        },
        user_id: {
          type: DataType.bigInt(),
          unsigned: true,
          required: true,
        },
        created_at: {
          type: DataType.timestamp(),
          default: 'current_timestamp',
        },
        updated_at: {
          type: DataType.timestamp(),
          default: 'current_timestamp',
          onUpdate: 'current_timestamp',
        },
      },
      // Primary keys
      {
        columns: ['id'],
      },
      // Foreign keys
      [
        {
          name: 'FK_Users',
          column: 'user_id',
          table: 'users',
          referencedColumn: 'id',
        },
        {
          name: 'FK_Roles',
          column: 'role_id',
          table: 'roles',
          referencedColumn: 'id',
        },
      ],
    );
  }

  protected async down() {
    await Database.dropIfExists('role_users');
  }
}

export default new CreateRole_usersTable();
