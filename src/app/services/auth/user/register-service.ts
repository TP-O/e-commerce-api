import bcrypt from 'bcrypt';
import { User } from '@app/models/auth/user';
import { Role } from '@app/models/auth/role';
import { RoleUser } from '@app/models/auth/pivot/role-user';

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
    const { success } = await RoleUser.create([
      {
        user_id: userId,
        role_id: roleId,
      },
    ]);

    return success;
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
