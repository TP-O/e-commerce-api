import { Admin } from '@app/models/auth/admin';
import { AdminRole } from '@app/models/auth/admin-role';
import { RegisterService } from '@app/services/auth/register/register-service';
import { singleton } from 'tsyringe';

@singleton()
export class AdminRegisterService extends RegisterService {
  /**
   * Constructor.
   */
  public constructor() {
    super(Admin, 'admin');
  }

  /**
   * Assign a role to the account account.
   *
   * @param accountId ID's account.
   * @param roleId ID's role.
   */
  public async assign(userId: number, roleId: number) {
    const { success } = await AdminRole.create([
      {
        admin_id: userId,
        role_id: roleId,
      },
    ]);

    return success ?? false;
  }
}
