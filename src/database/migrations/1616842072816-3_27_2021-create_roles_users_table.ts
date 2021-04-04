import { basename } from 'path';
import { Database } from '@database/core/database';
import { Migration } from '@database/core/migration';
import { DataType } from '@database/core/builder/types/data.type';

export class CreateRolesUsersTable extends Migration {
  /**
   * Name of the table will be created.
   */
  protected table = 'roles_users';

  /**
   * Name of migration.
   */
  protected migrationName = basename(__filename).split('.')[0];

  protected async up() {
    await Database.create(
      'roles_users',
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
          name: 'FK_RolesUsers_Roles',
          column: 'role_id',
          table: 'roles',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },
        {
          name: 'FK_RolesUsers_Users',
          column: 'user_id',
          table: 'users',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },
      ],
      [
        {
          name: 'UQ_RolesUsers_RoleId_UserId',
          columns: ['role_id', 'user_id'],
        },
      ],
    );
  }

  protected async down() {
    await Database.dropIfExists('roles_users');
  }
}

export default new CreateRolesUsersTable();
