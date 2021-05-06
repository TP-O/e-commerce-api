import { CustomerForgotPasswordService } from '@app/services/auth/password/customer-forgot-password-service';
import { ForgotPasswordController } from '@app/controllers/auth/password/forgot-password-controller';
import { autoInjectable } from 'tsyringe';
import { ForgotPasswordValidator } from '@app/validators/auth/password/forgot-password-validator';
import { ResetPasswordValidator } from '@app/validators/auth/password/reset-password-validator';

@autoInjectable()
export class CustomerForgotPasswordController extends ForgotPasswordController {
  /**
   * Constructor.
   *
   * @param forgotPasswordService forgot password service.
   * @param forgotPasswordValidator forgot password validator.
   * @param resetPasswordValidator reset password validator.
   */
  public constructor(
    forgotPasswordService: CustomerForgotPasswordService,
    forgotPasswordValidator: ForgotPasswordValidator,
    resetPasswordValidator: ResetPasswordValidator,
  ) {
    super(
      forgotPasswordService,
      forgotPasswordValidator,
      resetPasswordValidator,
    );
  }
}
