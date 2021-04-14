import { Seller } from '@app/models/auth/seller';
import { VerifyService } from '@app/services/auth/verify/verify-service';

class SellerVerifyService extends VerifyService {
  /**
   * Constructor.
   */
  public constructor() {
    super(Seller, 'seller');
  }
}

export const verifyService = new SellerVerifyService();
