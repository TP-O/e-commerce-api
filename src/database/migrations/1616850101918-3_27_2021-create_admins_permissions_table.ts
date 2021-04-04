import { basename } from 'path';
import { Database } from '@database/core/database';
import { Migration } from '@database/core/migration';
import { DataType } from '@database/core/builder/types/data.type';

export class CreateAdminsPermissionsTable extends Migration {
  /**
   * Name of the table will be created.
   */
  protected table = 'admins_permissions';

  /**
   * Name of migration.
   */
  protected migrationName = basename(__filename).split('.')[0];

  protected async up() {
    await Database.create(
      'admins_permissions',
      // Columns
      {
        id: {
          type: DataType.bigInt(),
          unsigned: true,
          increment: true,
          required: true,
        },
        admin_id: {
          type: DataType.bigInt(),
          unsigned: true,
          required: true,
        },
        permission_id: {
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
          name: 'FK_AdminsPermissions_Admins',
          column: 'admin_id',
          table: 'admins',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },
        {
          name: 'FK_AdminsPermissions_Permissions',
          column: 'permission_id',
          table: 'permissions',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },
      ],
      [
        {
          name: 'UQ_AdminsPermissions_AdminId_PermissionId',
          columns: ['admin_id', 'permission_id'],
        },
      ],
    );
  }

  protected async down() {
    await Database.dropIfExists('admins_permissions');
  }
}

export default new CreateAdminsPermissionsTable();
