import { injectable } from 'tsyringe';
import { LoginService } from '@app/services/auth/login/login-service';

@injectable()
export class UserLoginService extends LoginService {
  /**
   * Constructor.
   */
  public constructor() {
    super('default');
  }
}
