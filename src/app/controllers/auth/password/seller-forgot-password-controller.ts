import { sellerForgotPasswordService } from '@app/services/auth/password/seller-forgot-password-service';
import { ForgotPasswordController } from '@app/controllers/auth/password/forgot-password-controller';

class SellerForgotPasswordController extends ForgotPasswordController {
  /**
   * Constructor.
   */
  public constructor() {
    super(sellerForgotPasswordService);
  }
}

export default new SellerForgotPasswordController();
