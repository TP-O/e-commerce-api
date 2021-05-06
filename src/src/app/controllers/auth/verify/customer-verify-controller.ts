import { VerifyController } from '@app/controllers/auth/verify/verify-controller';
import { CustomerVerifyService } from '@app/services/auth/verify/customer-verify-service';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class CustomerVerifyController extends VerifyController {
  /**
   * Constructor.
   *
   * @param verifyService verification service.
   */
  public constructor(verifyService: CustomerVerifyService) {
    super(verifyService);
  }
}
