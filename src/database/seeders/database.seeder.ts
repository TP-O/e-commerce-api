import User from './users.seeder';
import Product from './products.seeder';

class DatabaseSeeder {
  async seed(): Promise<void> {
    await User.seed();
    await Product.seed();
  }
}

export default new DatabaseSeeder();
