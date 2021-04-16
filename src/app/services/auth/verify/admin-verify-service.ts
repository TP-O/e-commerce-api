import { Admin } from '@app/models/auth/admin';
import { VerifyService } from '@app/services/auth/verify/verify-service';
import { singleton } from 'tsyringe';

@singleton()
export class AdminVerifyService extends VerifyService {
  /**
   * Constructor.
   */
  public constructor() {
    super(Admin, 'admin');
  }
}
