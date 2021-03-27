import { basename } from 'path';
import { Database } from 'database/core/database';
import { Migration } from 'database/core/migration';
import { DataType } from 'database/core/builder/types/data.type';

export class CreateRoleSalesmanTable extends Migration {
  /**
   * Name of the table will be created.
   */
  protected table = 'role_salesman';

  /**
   * Name of migration.
   */
  protected migrationName = basename(__filename).split('.')[0];

  protected async up() {
    await Database.create(
      'role_salesman',
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
        salesman_id: {
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
          name: 'FK_RoleSalesman_Roles',
          column: 'role_id',
          table: 'roles',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },
        {
          name: 'FK_RoleSalesman_Salesmans',
          column: 'salesman_id',
          table: 'salesmans',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },
      ],
      [
        {
          name: 'UQ_RoleSalesman_RoleId_SalesmanId',
          columns: ['role_id', 'salesman_id'],
        },
      ],
    );
  }

  protected async down() {
    await Database.dropIfExists('role_salesman');
  }
}

export default new CreateRoleSalesmanTable();
