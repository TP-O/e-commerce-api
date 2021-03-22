import { basename } from 'path';
import { Database } from '@database/core/database';
import { Migration } from '@database/core/migration';
import { DataType } from '@database/core/builder/types/data.type';

export class CreateProductsTable extends Migration {
  /**
   * Name of the table will be created.
   */
  protected table = 'products';

  /**
   * Name of migration.
   */
  protected migrationName = basename(__filename).split('.')[0];

  protected async up() {
    await Database.create(
      'products',
      // Columns
      {
        id: {
          type: DataType.bigInt(),
          unsigned: true,
          increment: true,
          required: true,
        },
        user_id: {
          type: DataType.bigInt(),
          unsigned: true,
          required: true,
        },
        name: {
          type: DataType.varChar(255),
          required: true,
        },
        price: {
          type: DataType.int(),
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
          column: 'user_id',
          table: 'users',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },
      ],
    );
  }

  protected async down() {
    await Database.dropIfExists('products');
  }
}

export default new CreateProductsTable();
