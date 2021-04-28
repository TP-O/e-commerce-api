import { Seeder } from '@modules/database/core/seeder';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class ProductsSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'products';

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
    await this.database.table('products').insert(
      // Column names
      ['name', 'slug', 'description', 'price', 'amount'],
      // Inserted data
      [[]],
    );
  }
}
