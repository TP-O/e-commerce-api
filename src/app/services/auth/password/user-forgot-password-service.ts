import { User } from '@app/models/auth/user';
import { ForgotPasswordService } from '@app/services/auth/password/forgot-password-service';
import { singleton } from 'tsyringe';

@singleton()
export class UserForgotPasswordService extends ForgotPasswordService {
  /**
   * Constructor.
   */
  public constructor() {
    super(User, 'user');
  }
}
