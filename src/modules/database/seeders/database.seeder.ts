import { AdminsSeeder } from './admins';
import { UsersSeeder } from './users';
import { SellersSeeder } from './sellers';
import { RolesSeeder } from './roles';
import { PermissionsSeeder } from './permissions';
import { PermissionsRolesSeeder } from './permissions-roles';
import { AdminsRolesSeeder } from './admins-roles';
import { RolesUsersSeeder } from './roles-users';
import { RolesSellersSeeder } from './roles-sellers';
import { ForgotPasswordsSeeder } from './forgot-passwords';
import { ActivationsSeeder } from './activations';
import { container } from 'tsyringe';

export class DatabaseSeeder {
  public async seed(): Promise<void> {
    await container.resolve(AdminsSeeder).seed();
    await container.resolve(UsersSeeder).seed();
    await container.resolve(SellersSeeder).seed();
    await container.resolve(RolesSeeder).seed();
    await container.resolve(PermissionsSeeder).seed();
    await container.resolve(PermissionsRolesSeeder).seed();
    await container.resolve(AdminsRolesSeeder).seed();
    await container.resolve(RolesUsersSeeder).seed();
    await container.resolve(RolesSellersSeeder).seed();
    await container.resolve(ForgotPasswordsSeeder).seed();
    await container.resolve(ActivationsSeeder).seed();
  }
}
