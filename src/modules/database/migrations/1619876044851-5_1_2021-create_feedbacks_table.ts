import { basename } from 'path';
import { Migration } from '@modules/database/core/migration';
import { DataType } from '@modules/database/core/builder/types/data-type';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class CreateFeedbacksTable extends Migration {
  /**
   * Name of the table will be created.
   */
  protected table = 'feedbacks';

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
      table: 'feedbacks',
      columns: {
        id: {
          type: DataType.bigInt(),
          unsigned: true,
          increment: true,
          required: true,
        },
        customerId: {
          type: DataType.bigInt(),
          unsigned: true,
          required: true,
        },
        productId: {
          type: DataType.bigInt(),
          unsigned: true,
          required: true,
        },
        rating: {
          type: DataType.bigInt(),
          unsigned: true,
          required: true,
        },
        content: {
          type: DataType.text(),
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
          column: 'customerId',
          table: 'customers',
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
    await this.database.dropIfExists('feedbacks');
  }
}
