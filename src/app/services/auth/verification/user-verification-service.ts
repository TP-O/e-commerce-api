import { User } from '@app/models/auth/user';
import { VerificationService } from '@app/services/auth/verification/verification-service';

class UserVerificationService extends VerificationService {
  /**
   * Constructor.
   */
  public constructor() {
    super(User, 'user');
  }
}

export const verificationService = new UserVerificationService();
