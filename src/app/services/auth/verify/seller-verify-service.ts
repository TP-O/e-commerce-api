import { Seller } from '@app/models/auth/seller';
import { VerifyService } from '@app/services/auth/verify/verify-service';
import { singleton } from 'tsyringe';

@singleton()
export class SellerVerifyService extends VerifyService {
  /**
   * Constructor.
   */
  public constructor() {
    super(Seller, 'seller');
  }
}
