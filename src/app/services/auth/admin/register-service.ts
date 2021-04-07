import bcrypt from 'bcrypt';
import { Database } from '@modules/database/core';
import { Admin } from '@app/models/auth/admin';
import { Role } from '@app/models/auth/role';

class RegisterService {
  /**
   * Register admin account.
   *
   * @param value admin information.
   */
  public async registerAccount(value: any) {
    const { success } = await Admin.create([
      {
        name: value.name,
        email: value.email,
        password: bcrypt.hashSync(value.password, 10),
      },
    ]);

    return success;
  }

  /**
   * Assign a role to the admin account.
   *
   * @param adminId ID's admin.
   * @param roleId ID's role.
   */
  public async assignRole(adminId: string, roleId: string) {
    const { error } = await Database.raw(
      `INSERT INTO admins_roles (role_id, admin_id) VALUES (${roleId}, ${adminId})`,
    );

    return error;
  }

  /**
   * Find role by name.
   *
   * @param name role's name.
   */
  public async findRoleByName(name: string) {
    const { data } = await Role.select('id')
      .where([['name', '=', `v:${name}`]])
      .get();

    return data?.first();
  }

  /**
   * Find the admin by email.
   *
   * @param email admin's email.
   */
  public async findAdminByEmail(email: string) {
    const { data } = await Admin.select('id')
      .where([['email', '=', `v:${email}`]])
      .get();

    return data?.first();
  }
}

export default new RegisterService();
