import bcrypt from 'bcrypt';
import { Database } from '@modules/database/core';
import { User } from '@app/models/auth/user';
import { Role } from '@app/models/auth/role';

class RegisterService {
  /**
   * Register user account.
   *
   * @param value user information.
   */
  public async registerAccount(value: any) {
    const { success } = await User.create([
      {
        name: value.name,
        email: value.email,
        password: bcrypt.hashSync(value.password, 10),
      },
    ]);

    return success;
  }

  /**
   * Assign a role to the user account.
   *
   * @param userId ID's user.
   * @param roleId ID's role.
   */
  public async assignRole(userId: string, roleId: string) {
    const { error } = await Database.raw(
      `INSERT INTO roles_users (role_id, user_id) VALUES (${roleId}, ${userId})`,
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
   * Find the user by email.
   *
   * @param email user's email.
   */
  public async findUserByEmail(email: string) {
    const { data } = await User.select('id')
      .where([['email', '=', `v:${email}`]])
      .get();

    return data?.first();
  }
}

export default new RegisterService();
