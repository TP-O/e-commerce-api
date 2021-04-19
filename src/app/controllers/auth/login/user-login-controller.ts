import { LoginController } from '@app/controllers/auth/login/login-controller';
import { UserLoginService } from '@app/services/auth/login/user-login-service';
import { LoginValidator } from '@app/validators/auth/login/login-validator';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class UserLoginController extends LoginController {
  /**
   * Constructor.
   *
   * @param userLoginService user login service.
   * @param loginValidator login validator.
   */
  public constructor(
    userLoginService: UserLoginService,
    loginValidator: LoginValidator,
  ) {
    super(userLoginService, loginValidator);
  }
}
