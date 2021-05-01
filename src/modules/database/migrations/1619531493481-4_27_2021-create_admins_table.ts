import { basename } from 'path';
import { Migration } from '@modules/database/core/migration';
import { DataType } from '@modules/database/core/builder/types/data-type';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class CreateAdminsTable extends Migration {
  /**
   * Name of the table will be created.
   */
  protected table = 'admins';

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
      table: 'admins',
      columns: {
        id: {
          type: DataType.bigInt(),
          unsigned: true,
          increment: true,
          required: true,
        },
        roleId: {
          type: DataType.bigInt(),
          unsigned: true,
          required: true,
        },
        firstName: {
          type: DataType.varChar(50),
          required: true,
        },
        middleName: {
          type: DataType.varChar(50),
        },
        lastName: {
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
        active: {
          type: DataType.bool(),
          default: 'true',
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
          column: 'roleId',
          table: 'admin_roles',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },
      ],
    });
  }

  protected async down() {
    await this.database.dropIfExists('admins');
  }
}
