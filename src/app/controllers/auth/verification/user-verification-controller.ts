import { VerificationController } from '@app/controllers/auth/verification/verification-controller';
import { verificationService } from '@app/services/auth/verification/user-verification-service';

class UserVerificationController extends VerificationController {
  /**
   * Constructor.
   */
  public constructor() {
    super(verificationService);
  }
}

export default new UserVerificationController();
