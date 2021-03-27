import User from './users.seeder';
import Product from './products.seeder';
import Role from './roles.seeder';
import RoleUsers from './role_users.seeder';

class DatabaseSeeder {
  async seed(): Promise<void> {
    await User.seed();
    await Product.seed();
    await Role.seed();
    await RoleUsers.seed();
  }
}

export default new DatabaseSeeder();
