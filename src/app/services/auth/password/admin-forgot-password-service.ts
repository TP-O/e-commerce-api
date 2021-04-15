import { Admin } from '@app/models/auth/admin';
import { ForgotPasswordService } from '@app/services/auth/password/forgot-password-service';

class AdminForgotPasswordService extends ForgotPasswordService {
  /**
   * Constructor.
   */
  public constructor() {
    super(Admin, 'admin');
  }
}

export const adminForgotPasswordService = new AdminForgotPasswordService();
