import { basename } from 'path';
import { Migration } from '@modules/database/core/migration';
import { DataType } from '@modules/database/core/builder/types/data-type';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class CreateActivationsTable extends Migration {
  /**
   * Name of the table will be created.
   */
  protected table = 'activations';

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
      table: 'activations',
      columns: {
        id: {
          type: DataType.bigInt(),
          unsigned: true,
          increment: true,
          required: true,
        },
        account_id: {
          type: DataType.bigInt(),
          unsigned: true,
          required: true,
        },
        code: {
          type: DataType.varChar(255),
          required: true,
        },
        type: {
          type: DataType.varChar(50),
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
      primaryKey: {
        columns: ['id'],
      },
    });
  }

  protected async down() {
    await this.database.dropIfExists('activations');
  }
}
