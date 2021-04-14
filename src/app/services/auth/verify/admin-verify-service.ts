import { Admin } from '@app/models/auth/admin';
import { VerifyService } from '@app/services/auth/verify/verify-service';

class AdminVerifyService extends VerifyService {
  /**
   * Constructor.
   */
  public constructor() {
    super(Admin, 'admin');
  }
}

export const verifyService = new AdminVerifyService();
