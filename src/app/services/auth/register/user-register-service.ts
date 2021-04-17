import { RoleUser } from '@app/models/auth/role-user';
import { User } from '@app/models/auth/user';
import { RegisterService } from '@app/services/auth/register/register-service';
import { singleton } from 'tsyringe';

@singleton()
export class UserRegisterService extends RegisterService {
  /**
   * Constructor.
   */
  public constructor() {
    super(User, 'user');
  }

  /**
   * Assign a role to the account account.
   *
   * @param accountId ID's account.
   * @param roleId ID's role.
   */
  public async assign(userId: number, roleId: number) {
    const { success } = await RoleUser.create([
      {
        user_id: userId,
        role_id: roleId,
      },
    ]);

    return success ?? false;
  }
}
