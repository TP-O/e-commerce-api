import { LoginController } from '@app/controllers/auth/login/login-controller';
import { AdminLoginService } from '@app/services/auth/login/admin-login-service';
import { LoginValidator } from '@app/validators/auth/login/login-validator';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class AdminLoginController extends LoginController {
  /**
   * Constructor.
   *
   * @param adminLoginService admin login service.
   * @param loginValidator login validator.
   */
  public constructor(
    adminLoginService: AdminLoginService,
    loginValidator: LoginValidator,
  ) {
    super(adminLoginService, loginValidator);
  }
}
