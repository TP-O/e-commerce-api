import { Admin } from '@app/models/auth/admin';
import { ForgotPasswordService } from '@app/services/auth/password/forgot-password-service';
import { singleton } from 'tsyringe';

@singleton()
export class AdminForgotPasswordService extends ForgotPasswordService {
  /**
   * Constructor.
   */
  public constructor() {
    super(Admin, 'admin');
  }
}
