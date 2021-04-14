import { RoleUser } from '@app/models/auth/pivot/role-user';
import { User } from '@app/models/auth/user';
import { RegisterService } from '@app/services/auth/register/register-service';

class UserRegisterService extends RegisterService {
  /**
   * Constructor.
   */
  public constructor() {
    super(User);
  }

  /**
   * Assign a role to the account account.
   *
   * @param accountId ID's account.
   * @param roleId ID's role.
   */
  public async assign(userId: string, roleId: string) {
    const { success } = await RoleUser.create([
      {
        user_id: userId,
        role_id: roleId,
      },
    ]);

    return success ?? false;
  }
}

export const registerService = new UserRegisterService();
