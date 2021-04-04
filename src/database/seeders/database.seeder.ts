import Admins from './admins.seeder';
import Users from './users.seeder';
import Sellers from './sellers.seeder';
import Roles from './roles.seeder';
import Permissions from './permissions.seeder';
import PermissionsRoles from './permissions_roles.seeder';
import AdminsRoles from './admins_roles.seeder';
import RolesUsers from './roles_users.seeder';
import RolesSellers from './roles_sellers.seeder';
import AdminsPermissions from './admins_permissions.seeder';
import PermissionsUsers from './permissions_users.seeder';
import PermissionsSellers from './permissions_sellers.seeder';

class DatabaseSeeder {
  public async seed(): Promise<void> {
    await Admins.seed();
    await Users.seed();
    await Sellers.seed();
    await Roles.seed();
    await Permissions.seed();
    await PermissionsRoles.seed();
    await AdminsRoles.seed();
    await RolesUsers.seed();
    await RolesSellers.seed();
    await AdminsPermissions.seed();
    await PermissionsUsers.seed();
    await PermissionsSellers.seed();
  }
}

export default new DatabaseSeeder();
