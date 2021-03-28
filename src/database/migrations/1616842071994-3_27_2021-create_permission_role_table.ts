import { basename } from 'path';
import { Database } from '@database/core/database';
import { Migration } from '@database/core/migration';
import { DataType } from '@database/core/builder/types/data.type';

export class CreatePermissionRoleTable extends Migration {
  /**
   * Name of the table will be created.
   */
  protected table = 'permission_role';

  /**
   * Name of migration.
   */
  protected migrationName = basename(__filename).split('.')[0];

  protected async up() {
    await Database.create(
      'permission_role',
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
        role_id: {
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
          name: 'FK_PermissionRole_Permissions',
          column: 'permission_id',
          table: 'permissions',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },
        {
          name: 'FK_PermissionRole_Roles',
          column: 'role_id',
          table: 'roles',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },
      ],
      [
        {
          name: 'UQ_PermissionRole_PermissionId_Role_id',
          columns: ['permission_id', 'role_id'],
        },
      ],
    );
  }

  protected async down() {
    await Database.dropIfExists('permission_role');
  }
}

export default new CreatePermissionRoleTable();
