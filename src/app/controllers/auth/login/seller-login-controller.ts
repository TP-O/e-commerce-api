import { LoginController } from '@app/controllers/auth/login/login-controller';
import { LoginValidator } from '@app/validators/auth/login/login-validator';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class SellerLoginController extends LoginController {
  /**
   * Constructor.
   *
   * @param valiloginValidatordator login validator.
   */
  public constructor(loginValidator: LoginValidator) {
    super('seller', loginValidator);
  }
}
