import { Seller } from '@app/models/auth/seller';
import { SellerRole } from '@app/models/auth/seller-role';
import { RegisterService } from '@app/services/auth/register/register-service';
import { singleton } from 'tsyringe';

@singleton()
export class SellerRegisterService extends RegisterService {
  /**
   * Constructor.
   */
  public constructor() {
    super(Seller, SellerRole, 'seller');
  }
}
