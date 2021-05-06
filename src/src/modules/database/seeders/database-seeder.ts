import { AdvertisementStrategiesSellersSeeder } from './advertisement-strategies-sellers';
import { AdvertisementStrategiesProductsSeeder } from './advertisement-strategies-products';
import { AdvertisementStrategiesSeeder } from './advertisement-strategies';
import { AdvertisementTypesSeeder } from './advertisement-types';
import { container } from 'tsyringe';
import { AdminRolesSeeder } from './admin-roles';
import { AdminsSeeder } from './admins';
import { BrandsSeeder } from './brands';
import { CustomerRolesSeeder } from './customer-roles';
import { CustomersSeeder } from './customers';
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
    await container.resolve(AdvertisementTypesSeeder).seed();
    await container.resolve(AdvertisementStrategiesSeeder).seed();
    await container.resolve(AdvertisementStrategiesProductsSeeder).seed();
    await container.resolve(AdvertisementStrategiesSellersSeeder).seed();
  }
}
