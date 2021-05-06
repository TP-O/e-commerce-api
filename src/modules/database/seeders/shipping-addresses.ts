import { Seeder } from '@modules/database/core/seeder';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class ShippingAddressesSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'shipping_addresses';

  /**
   * Constructor.
   *
   * @param database database instance.
   */
  public constructor(protected database: Database) {
    super(database);
  }

  /**
   * Insert data to table.
   */
  protected async run() {
    await this.database.table('shipping_addresses').insert(
      // Column names
      ['customerId', 'typeId', 'fullName', 'phoneNumber', 'city', 'district', 'ward', 'address'],
      // Inserted data
      [
        [
          '1', '1', 'Le Tran Phong', '0338620787', 'Ho Chi Minh', 'Quan 1', 'Phuong 1', 'Nam Ki Khoi Nghia', 
        ],
        [
          '2', '2', 'Trinh Quang Anh', '0906455756', 'Ho Chi Minh', 'Quan Binh Thanh', 'Phuong 22', 'Nam Ki Khoi Nghia',
        ],
        [
          '3', '1', 'Nguyen Ngoc Minh Nhat', '0786786919', 'Ho Chi Minh', 'Quan 3', 'Phuong 2', 'Pham Ngoc Thach',
        ],
      ],
    );
  }
}
