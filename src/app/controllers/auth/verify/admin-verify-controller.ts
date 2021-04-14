import { VerifyController } from '@app/controllers/auth/verify/verify-controller';
import { verifyService } from '@app/services/auth/verify/admin-verify-service';

class AdminVerifyController extends VerifyController {
  /**
   * Constructor.
   */
  public constructor() {
    super(verifyService);
  }
}

export default new AdminVerifyController();
