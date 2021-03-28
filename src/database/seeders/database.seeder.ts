import Admin from './admins.seeder';
import User from './users.seeder';
import Salesman from './salesmans.seeder';
import Roles from './roles.seeder';
import Permissions from './permissions.seeder';
import PermissionRole from './permission_role.seeder';
import AdminRole from './admin_role.seeder';
import RoleUser from './role_user.seeder';
import RoleSalesman from './role_salesman.seeder';
import AdminPermission from './admin_permission.seeder';
import PermissionUser from './permission_user.seeder';
import PermissionSalesman from './permission_salesman.seeder';

class DatabaseSeeder {
  public async seed(): Promise<void> {
    await Admin.seed();
    await User.seed();
    await Salesman.seed();
    await Roles.seed();
    await Permissions.seed();
    await PermissionRole.seed();
    await AdminRole.seed();
    await RoleUser.seed();
    await RoleSalesman.seed();
    await AdminPermission.seed();
    await PermissionUser.seed();
    await PermissionSalesman.seed();
  }
}

export default new DatabaseSeeder();
