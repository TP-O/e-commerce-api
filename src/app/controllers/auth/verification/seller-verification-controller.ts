import { VerificationController } from '@app/controllers/auth/verification/verification-controller';
import { verificationService } from '@app/services/auth/verification/seller-verification-service';

class SellerVerificationController extends VerificationController {
  /**
   * Constructor.
   */
  public constructor() {
    super(verificationService);
  }
}

export default new SellerVerificationController();
