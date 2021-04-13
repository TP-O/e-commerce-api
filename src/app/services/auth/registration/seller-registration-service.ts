import { RoleSeller } from '@app/models/auth/pivot/role-seller';
import { Seller } from '@app/models/auth/seller';
import { RegistrationService } from '@app/services/auth/registration/registration-service';

class SellerRegistrationService extends RegistrationService {
  /**
   * Constructor.
   */
  public constructor() {
    super(Seller);
  }

  /**
   * Assign a role to the account account.
   *
   * @param accountId ID's account.
   * @param roleId ID's role.
   */
  public async assign(userId: string, roleId: string) {
    const { success } = await RoleSeller.create([
      {
        seller_id: userId,
        role_id: roleId,
      },
    ]);

    return success ?? false;
  }
}

export const registrationService = new SellerRegistrationService();
