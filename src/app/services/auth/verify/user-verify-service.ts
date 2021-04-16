import { User } from '@app/models/auth/user';
import { VerifyService } from '@app/services/auth/verify/verify-service';
import { singleton } from 'tsyringe';

@singleton()
export class UserVerifyService extends VerifyService {
  /**
   * Constructor.
   */
  public constructor() {
    super(User, 'user');
  }
}
