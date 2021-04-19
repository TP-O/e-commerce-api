import { basename } from 'path';
import { Database } from '@modules/database/core/database';
import { Migration } from '@modules/database/core/migration';
import { DataType } from '@modules/database/core/builder/types/data-type';

export class CreatePermissionsRolesTable extends Migration {
  /**
   * Name of the table will be created.
   */
  protected table = 'permissions_roles';

  /**
   * Name of migration.
   */
  protected migrationName = basename(__filename).split('.')[0];

  protected async up() {
    await Database.create(
      'permissions_roles',
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
          name: 'FK_PermissionsRoles_Permissions',
          column: 'permission_id',
          table: 'permissions',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },
        {
          name: 'FK_PermissionsRoles_Roles',
          column: 'role_id',
          table: 'roles',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },
      ],
      [
        {
          name: 'UQ_PermissionsRoles_PermissionId_RoleId',
          columns: ['permission_id', 'role_id'],
        },
      ],
    );
  }

  protected async down() {
    await Database.dropIfExists('permissions_roles');
  }
}

export default new CreatePermissionsRolesTable();
