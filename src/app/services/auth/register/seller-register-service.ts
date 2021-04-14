import { RoleSeller } from '@app/models/auth/pivot/role-seller';
import { Seller } from '@app/models/auth/seller';
import { RegisterService } from '@app/services/auth/register/register-service';

class SellerRegisterService extends RegisterService {
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

export const registerService = new SellerRegisterService();
