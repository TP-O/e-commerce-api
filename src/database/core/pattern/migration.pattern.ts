import { basename } from 'path';
import { Database } from '@database/core/database';
import { Migration } from '@database/core/migration';
import { DataType } from '@database/core/builder/types/data.type';

export class CreateXXXTable extends Migration {
  /**
   * Name of the table will be created.
   */
  protected table = 'xxx';

  /**
   * Name of migration.
   */
  protected migrationName = basename(__filename).split('.')[0];

  protected async up() {
    await Database.create(
      'xxx',
      // Columns
      {
        id: {
          type: DataType.bigInt(),
          unsigned: true,
          increment: true,
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
      [],
    );
  }

  protected async down() {
    await Database.dropIfExists('xxx');
  }
}

export default new CreateXXXTable();
