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
  protected table = 'advertisement_strategies';

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
      table: 'advertisement_strategies',
      columns: {
        id: {
          type: DataType.bigInt(),
          unsigned: true,
          increment: true,
          required: true,
        },
        categoryId: {
          type: DataType.bigInt(),
          unsigned: true,
          required: true,
        },
        typeId: {
          type: DataType.bigInt(),
          unsigned: true,
          required: true,
        },
        name: {
          type: DataType.varChar(255),
          required: true,
        },
        slug: {
          type: DataType.varChar(255),
          required: true,
        },
        max: {
          type: DataType.int(),
          required: true,
        },
        min: {
          type: DataType.int(),
          required: true,
        },
        
        startOn: {
          type: DataType.timestamp(),
          default: 'current_timestamp',
        },
        endOn: {
          type: DataType.timestamp(),
          default: 'current_timestamp',
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
          column: 'typeId',
          table: 'advertisement_types',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },
        {
          column: 'categoryId',
          table: 'product_categories',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },

      ],
    });
  }

  protected async down() {
    await this.database.dropIfExists('advertisement_strategies');
  }
}
