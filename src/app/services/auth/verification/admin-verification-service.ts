import { Admin } from '@app/models/auth/admin';
import { VerificationService } from '@app/services/auth/verification/verification-service';

class AdminVerificationService extends VerificationService {
  /**
   * Constructor.
   */
  public constructor() {
    super(Admin, 'admin');
  }
}

export const verificationService = new AdminVerificationService();
