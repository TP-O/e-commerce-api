import { Admin } from '@app/models/auth/admin';
import { AdminRole } from '@app/models/auth/pivot/admin-role';
import { RegistrationService } from '@app/services/auth/registration/registration-service';

class AdminRegistrationService extends RegistrationService {
  /**
   * Constructor.
   */
  public constructor() {
    super(Admin);
  }

  /**
   * Assign a role to the account account.
   *
   * @param accountId ID's account.
   * @param roleId ID's role.
   */
  public async assign(userId: string, roleId: string) {
    const { success } = await AdminRole.create([
      {
        admin_id: userId,
        role_id: roleId,
      },
    ]);

    return success ?? false;
  }
}

export const registrationService = new AdminRegistrationService();
