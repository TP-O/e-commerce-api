import { User } from '@app/models/auth/user';
import { VerifyService } from '@app/services/auth/verify/verify-service';

class UserVerifyService extends VerifyService {
  /**
   * Constructor.
   */
  public constructor() {
    super(User, 'user');
  }
}

export const verifyService = new UserVerifyService();
