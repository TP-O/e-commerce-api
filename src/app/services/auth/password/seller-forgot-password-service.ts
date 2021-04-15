import { Seller } from '@app/models/auth/seller';
import { ForgotPasswordService } from '@app/services/auth/password/forgot-password-service';

class SellerForgotPasswordService extends ForgotPasswordService {
  /**
   * Constructor.
   */
  public constructor() {
    super(Seller, 'seller');
  }
}

export const sellerForgotPasswordService = new SellerForgotPasswordService();
