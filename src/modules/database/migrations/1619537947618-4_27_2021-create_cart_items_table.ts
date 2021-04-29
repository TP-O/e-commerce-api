import { basename } from 'path';
import { Migration } from '@modules/database/core/migration';
import { DataType } from '@modules/database/core/builder/types/data-type';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class CreateCartItemsTable extends Migration {
  /**
   * Name of the table will be created.
   */
  protected table = 'cart_items';

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
      table: 'cart_items',
      columns: {
        id: {
          type: DataType.bigInt(),
          unsigned: true,
          increment: true,
          required: true,
        },
        cartId: {
          type: DataType.bigInt(),
          unsigned: true,
          required: true,
        },
        productId: {
          type: DataType.bigInt(),
          unsigned: true,
          required: true,
        },
        quantity: {
          type: DataType.int(),
          required: true,
        },
        price: {
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
          column: 'cartId',
          table: 'carts',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },
        {
          column: 'productId',
          table: 'products',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },
      ],
    });
  }

  protected async down() {
    await this.database.dropIfExists('cart_items');
  }
}
