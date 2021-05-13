import { container } from 'tsyringe';
import { AdminRolesSeeder } from './admin-roles';
import { AdminsSeeder } from './admins';
import { BrandsSeeder } from './brands';
import { CustomerRolesSeeder } from './customer-roles';
import { CustomersSeeder } from './customers';
import { FeedbacksSeeder } from './feedbacks';
import { ProductCategoriesSeeder } from './product-categories';
import { ProductsSeeder } from './products';
import { SellerRolesSeeder } from './seller-roles';
import { SellersSeeder } from './sellers';

export class DatabaseSeeder {
  public async seed() {
    await container.resolve(AdminRolesSeeder).seed();
    await container.resolve(CustomerRolesSeeder).seed();
    await container.resolve(SellerRolesSeeder).seed();
    await container.resolve(AdminsSeeder).seed();
    await container.resolve(CustomersSeeder).seed();
    await container.resolve(SellersSeeder).seed();
    await container.resolve(ProductCategoriesSeeder).seed();
    await container.resolve(BrandsSeeder).seed();
    await container.resolve(ProductsSeeder).seed();
    await container.resolve(FeedbacksSeeder).seed();
  }
}
