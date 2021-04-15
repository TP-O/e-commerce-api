import { User } from '@app/models/auth/user';
import { ForgotPasswordService } from '@app/services/auth/password/forgot-password-service';

class UserForgotPasswordService extends ForgotPasswordService {
  /**
   * Constructor.
   */
  public constructor() {
    super(User, 'user');
  }
}

export const userForgotPasswordService = new UserForgotPasswordService();
