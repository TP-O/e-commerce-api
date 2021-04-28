import { LoginController } from '@app/controllers/auth/login/login-controller';
import { CustomerLoginService } from '@app/services/auth/login/customer-login-service';
import { LoginValidator } from '@app/validators/auth/login/login-validator';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class CustomerLoginController extends LoginController {
  /**
   * Constructor.
   *
   * @param customerLoginService customer login service.
   * @param loginValidator login validator.
   */
  public constructor(
    userLoginService: CustomerLoginService,
    loginValidator: LoginValidator,
  ) {
    super(userLoginService, loginValidator);
  }
}
