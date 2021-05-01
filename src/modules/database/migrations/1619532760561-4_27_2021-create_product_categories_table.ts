import { basename } from 'path';
import { Migration } from '@modules/database/core/migration';
import { DataType } from '@modules/database/core/builder/types/data-type';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class CreateProductCategoriesTable extends Migration {
  /**
   * Name of the table will be created.
   */
  protected table = 'product_categories';

  /**
   * Name of migration.
   */
  protected migrationName = basename(__filename).split('.')[0];

  /**
   * Constructor.
   *
   * @param database database instance.
   */
  public constructor(protected database: Database) {
    super(database);
  }

  protected async up() {
    await this.database.create({
      table: 'product_categories',
      columns: {
        id: {
          type: DataType.bigInt(),
          unsigned: true,
          increment: true,
          required: true,
        },
        parentId: {
          type: DataType.bigInt(),
          unsigned: true,
          nullable: true,
        },
        name: {
          type: DataType.varChar(50),
          required: true,
        },
        slug: {
          type: DataType.varChar(50),
          required: true,
          unique: true,
        },
        description: {
          type: DataType.text(),
          required: true,
        },
        createdAt: {
          type: DataType.timestamp(),
          default: 'current_timestamp',
        },
        updatedAt: {
          type: DataType.timestamp(),
          default: 'current_timestamp',
          onUpdate: 'current_timestamp',
        },
      },
      primaryKey: {
        columns: ['id'],
      },
      foreignKeys: [
        {
          column: 'parentId',
          table: 'product_categories',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },
      ],
    });
  }

  protected async down() {
    await this.database.dropIfExists('product_categories');
  }
}
