import { basename } from 'path';
import { Migration } from '@modules/database/core/migration';
import { DataType } from '@modules/database/core/builder/types/data-type';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class CreateAdvertisementStrategiesSellers extends Migration {
  /**
   * Name of the table will be created.
   */
  protected table = 'advertisement_strategies_sellers';

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
      table: 'advertisement_strategies_sellers',
      columns: {
        id: {
          type: DataType.bigInt(),
          unsigned: true,
          increment: true,
          required: true,
        },
        strategyId: {
          type: DataType.bigInt(),
          unsigned: true,
          required: true,
        },
        sellerId: {
          type: DataType.bigInt(),
          unsigned: true,
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
          column: 'strategyId',
          table: 'advertisement_strategies',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },
      ],
    });
  }

  protected async down() {
    await this.database.dropIfExists('advertisement_strategies_sellers');
  }
}
