import { basename } from 'path';
import { Database } from '@database/core/database';
import { Migration } from '@database/core/migration';
import { DataType } from '@database/core/builder/types/data.type';

export class CreatePermissionUserTable extends Migration {
  /**
   * Name of the table will be created.
   */
  protected table = 'permission_user';

  /**
   * Name of migration.
   */
  protected migrationName = basename(__filename).split('.')[0];

  protected async up() {
    await Database.create(
      'permission_user',
      // Columns
      {
        id: {
          type: DataType.bigInt(),
          unsigned: true,
          increment: true,
          required: true,
        },
        permission_id: {
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
          name: 'FK_PermissionUser_Permissions',
          column: 'permission_id',
          table: 'permissions',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },
        {
          name: 'FK_PermissionUser_Users',
          column: 'user_id',
          table: 'users',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },
      ],
      [
        {
          name: 'UQ_PermissionUser_PermissionId_UserId',
          columns: ['permission_id', 'user_id'],
        },
      ],
    );
  }

  protected async down() {
    await Database.dropIfExists('permission_user');
  }
}

export default new CreatePermissionUserTable();
