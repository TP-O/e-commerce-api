import { basename } from 'path';
import { Database } from 'database/core/database';
import { Migration } from 'database/core/migration';
import { DataType } from 'database/core/builder/types/data.type';

export class CreatePermissionSalesmanTable extends Migration {
  /**
   * Name of the table will be created.
   */
  protected table = 'permission_salesman';

  /**
   * Name of migration.
   */
  protected migrationName = basename(__filename).split('.')[0];

  protected async up() {
    await Database.create(
      'permission_salesman',
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
          name: 'FK_PermissionSalesman_Permissions',
          column: 'permission_id',
          table: 'permissions',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },
        {
          name: 'FK_PermissionSalesman_Salesmans',
          column: 'salesman_id',
          table: 'salesmans',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },
      ],
      [
        {
          name: 'UQ_PermissionSalesman_PermissionId_SalesmanId',
          columns: ['permission_id', 'salesman_id'],
        },
      ],
    );
  }

  protected async down() {
    await Database.dropIfExists('permission_salesman');
  }
}

export default new CreatePermissionSalesmanTable();
