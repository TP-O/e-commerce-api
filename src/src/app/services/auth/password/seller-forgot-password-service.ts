import { Seller } from '@app/models/auth/seller';
import { ForgotPasswordService } from '@app/services/auth/password/forgot-password-service';
import { singleton } from 'tsyringe';

@singleton()
export class SellerForgotPasswordService extends ForgotPasswordService {
  /**
   * Constructor.
   */
  public constructor() {
    super(Seller, 'seller');
  }
}
