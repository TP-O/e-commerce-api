import { RoleSeller } from '@app/models/auth/role-seller';
import { Seller } from '@app/models/auth/seller';
import { RegisterService } from '@app/services/auth/register/register-service';
import { singleton } from 'tsyringe';

@singleton()
export class SellerRegisterService extends RegisterService {
  /**
   * Constructor.
   */
  public constructor() {
    super(Seller, 'seller');
  }

  /**
   * Assign a role to the account account.
   *
   * @param accountId ID's account.
   * @param roleId ID's role.
   */
  public async assign(userId: number, roleId: number) {
    const { success } = await RoleSeller.create([
      {
        seller_id: userId,
        role_id: roleId,
      },
    ]);

    return success ?? false;
  }
}
