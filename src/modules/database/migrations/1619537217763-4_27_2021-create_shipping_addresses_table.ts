import { basename } from 'path';
import { Migration } from '@modules/database/core/migration';
import { DataType } from '@modules/database/core/builder/types/data-type';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class CreateShippingAddressesTable extends Migration {
  /**
   * Name of the table will be created.
   */
  protected table = 'shipping_addresses';

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
      table: 'shipping_addresses',
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
        typeId: {
          type: DataType.bigInt(),
          unsigned: true,
          required: true,
        },
        fullName: {
          type: DataType.varChar(255),
          required: true,
        },
        phoneNumber: {
          type: DataType.varChar(255),
          required: true,
        },
        city: {
          type: DataType.varChar(255),
          required: true,
        },
        district: {
          type: DataType.varChar(255),
          required: true,
        },
        ward: {
          type: DataType.varChar(255),
          required: true,
        },
        address: {
          type: DataType.varChar(255),
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
          column: 'customerId',
          table: 'customers',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },
        {
          column: 'typeId',
          table: 'address_types',
          referencedColumn: 'id',
          onDelete: 'cascade',
        },
      ],
    });
  }

  protected async down() {
    await this.database.dropIfExists('shipping_addresses');
  }
}
