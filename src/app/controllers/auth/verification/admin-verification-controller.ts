import { VerificationController } from '@app/controllers/auth/verification/verification-controller';
import { verificationService } from '@app/services/auth/verification/admin-verification-service';

class AdminVerificationController extends VerificationController {
  /**
   * Constructor.
   */
  public constructor() {
    super(verificationService);
  }
}

export default new AdminVerificationController();
