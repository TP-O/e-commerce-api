import { userForgotPasswordService } from '@app/services/auth/password/user-forgot-password-service';
import { ForgotPasswordController } from '@app/controllers/auth/password/forgot-password-controller';

class UserForgotPasswordController extends ForgotPasswordController {
  /**
   * Constructor.
   */
  public constructor() {
    super(userForgotPasswordService);
  }
}

export default new UserForgotPasswordController();
