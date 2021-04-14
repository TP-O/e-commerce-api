import { VerifyController } from '@app/controllers/auth/verify/verify-controller';
import { verifyService } from '@app/services/auth/verify/user-verify-service';

class UserVerifyController extends VerifyController {
  /**
   * Constructor.
   */
  public constructor() {
    super(verifyService);
  }
}

export default new UserVerifyController();
