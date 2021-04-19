import { injectable } from 'tsyringe';
import { LoginService } from '@app/services/auth/login/login-service';

@injectable()
export class AdminLoginService extends LoginService {
  /**
   * Constructor.
   */
  public constructor() {
    super('admin');
  }
}
