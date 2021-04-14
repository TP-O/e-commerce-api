import { VerifyController } from '@app/controllers/auth/verify/verify-controller';
import { verifyService } from '@app/services/auth/verify/seller-verify-service';

class SellerVerifyController extends VerifyController {
  /**
   * Constructor.
   */
  public constructor() {
    super(verifyService);
  }
}

export default new SellerVerifyController();
