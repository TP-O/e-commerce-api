import { VerifyController } from '@app/controllers/auth/verify/verify-controller';
import { SellerVerifyService } from '@app/services/auth/verify/seller-verify-service';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class SellerVerifyController extends VerifyController {
  /**
   * Constructor.
   *
   * @param verifyService verification service.
   */
  public constructor(verifyService: SellerVerifyService) {
    super(verifyService);
  }
}
