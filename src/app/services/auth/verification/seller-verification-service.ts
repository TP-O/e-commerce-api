import { Seller } from '@app/models/auth/seller';
import { VerificationService } from '@app/services/auth/verification/verification-service';

class SellerVerificationService extends VerificationService {
  /**
   * Constructor.
   */
  public constructor() {
    super(Seller, 'seller');
  }
}

export const verificationService = new SellerVerificationService();
