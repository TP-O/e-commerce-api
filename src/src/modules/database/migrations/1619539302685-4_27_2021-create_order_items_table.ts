import { basename } from 'path';
import { Migration } from '@modules/database/core/migration';
import { DataType } from '@modules/database/core/builder/types/data-type';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class CreateOrderItemsTable extends Migration {
  /**
   * Name of the table will be created.
   */
  protected table = 'order_items';

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
      table: 'order_items',
      columns: {
        id: {
          type: DataType.bigInt(),
          unsigned: true,
          increment: true,
          required: true,
        },
        orderId: {
          type: DataType.bigInt(),
          unsigned: true,
          required: true,
        },
        addressId: {
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
          column: 'orderId',
          table: 'orders',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },
        {
          column: 'addressId',
          table: 'shipping_address',
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
    await this.database.dropIfExists('order_items');
  }
}
