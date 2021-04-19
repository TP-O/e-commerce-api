import { basename } from 'path';
import { Database } from '@modules/database/core/database';
import { Migration } from '@modules/database/core/migration';
import { DataType } from '@modules/database/core/builder/types/data-type';

export class CreateForgotPasswordsTable extends Migration {
  /**
   * Name of the table will be created.
   */
  protected table = 'forgot_passwords';

  /**
   * Name of migration.
   */
  protected migrationName = basename(__filename).split('.')[0];

  protected async up() {
    await Database.create(
      'forgot_passwords',
      // Columns
      {
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
      // Primary keys
      {
        columns: ['id'],
      },
      // Foreign keys
      [],
    );
  }

  protected async down() {
    await Database.dropIfExists('forgot_passwords');
  }
}

export default new CreateForgotPasswordsTable();
