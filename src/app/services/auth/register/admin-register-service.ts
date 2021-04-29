import { Admin } from '@app/models/auth/admin';
import { AdminRole } from '@app/models/auth/admin-role';
import { RegisterService } from '@app/services/auth/register/register-service';
import { singleton } from 'tsyringe';

@singleton()
export class AdminRegisterService extends RegisterService {
  /**
   * Constructor.
   */
  public constructor() {
    super(Admin, AdminRole, 'admin');
  }
}
