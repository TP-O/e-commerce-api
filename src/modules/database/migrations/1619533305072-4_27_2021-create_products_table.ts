import { basename } from 'path';
import { Migration } from '@modules/database/core/migration';
import { DataType } from '@modules/database/core/builder/types/data-type';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class CreateProductsTable extends Migration {
  /**
   * Name of the table will be created.
   */
  protected table = 'products';

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
      table: 'products',
      columns: {
        id: {
          type: DataType.bigInt(),
          unsigned: true,
          increment: true,
          required: true,
        },
        sellerId: {
          type: DataType.bigInt(),
          unsigned: true,
          required: true,
        },
        categoryId: {
          type: DataType.bigInt(),
          unsigned: true,
          required: true,
        },
        brandId: {
          type: DataType.bigInt(),
          unsigned: true,
          required: true,
        },
        name: {
          type: DataType.varChar(250),
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
        price: {
          type: DataType.int(),
          required: true,
        },
        amount: {
          type: DataType.int(),
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
          column: 'sellerId',
          table: 'sellers',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },
        {
          column: 'categoryId',
          table: 'product_categories',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },
        {
          column: 'brandId',
          table: 'brands',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },
      ],
    });
  }

  protected async down() {
    await this.database.dropIfExists('products');
  }
}
