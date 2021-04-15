import { adminForgotPasswordService } from '@app/services/auth/password/admin-forgot-password-service';
import { ForgotPasswordController } from '@app/controllers/auth/password/forgot-password-controller';

class AdminForgotPasswordController extends ForgotPasswordController {
  /**
   * Constructor.
   */
  public constructor() {
    super(adminForgotPasswordService);
  }
}

export default new AdminForgotPasswordController();
