import { LoginController } from '@app/controllers/auth/login/login-controller';
import { SellerLoginService } from '@app/services/auth/login/seller-login-service';
import { LoginValidator } from '@app/validators/auth/login/login-validator';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class SellerLoginController extends LoginController {
  /**
   * Constructor.
   *
   * @param sellerLoginService seller login service.
   * @param valiloginValidatordator login validator.
   */
  public constructor(
    sellerLoginService: SellerLoginService,
    loginValidator: LoginValidator,
  ) {
    super(sellerLoginService, loginValidator);
  }
}
