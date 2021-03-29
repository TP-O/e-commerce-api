import { basename } from 'path';
import { Database } from '@database/core/database';
import { Migration } from '@database/core/migration';
import { DataType } from '@database/core/builder/types/data.type';

export class CreateAdminsTable extends Migration {
  /**
   * Name of the table will be created.
   */
  protected table = 'admins';

  /**
   * Name of migration.
   */
  protected migrationName = basename(__filename).split('.')[0];

  protected async up() {
    await Database.create(
      'admins',
      // Columns
      {
        id: {
          type: DataType.bigInt(),
          unsigned: true,
          increment: true,
          required: true,
        },
        name: {
          type: DataType.varChar(50),
          required: true,
        },
        email: {
          type: DataType.varChar(255),
          required: true,
          unique: true,
        },
        password: {
          type: DataType.varChar(255),
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
    await Database.dropIfExists('admins');
  }
}

export default new CreateAdminsTable();
