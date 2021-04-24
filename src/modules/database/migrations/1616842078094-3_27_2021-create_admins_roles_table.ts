import { basename } from 'path';
import { Migration } from '@modules/database/core/migration';
import { DataType } from '@modules/database/core/builder/types/data-type';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class CreateAdminsRolesTable extends Migration {
  /**
   * Name of the table will be created.
   */
  protected table = 'admins_roles';

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
      table: 'admins_roles',
      columns: {
        id: {
          type: DataType.bigInt(),
          unsigned: true,
          increment: true,
          required: true,
        },
        admin_id: {
          type: DataType.bigInt(),
          unsigned: true,
          required: true,
        },
        role_id: {
          type: DataType.bigInt(),
          unsigned: true,
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
      foreignKeys: [
        {
          column: 'admin_id',
          table: 'admins',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },
        {
          column: 'role_id',
          table: 'roles',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },
      ],
      uniqueColumns: [
        {
          columns: ['admin_id', 'role_id'],
        },
      ],
    });
  }

  protected async down() {
    await this.database.dropIfExists('admins_roles');
  }
}
