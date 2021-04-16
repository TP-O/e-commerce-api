import { VerifyController } from '@app/controllers/auth/verify/verify-controller';
import { AdminVerifyService } from '@app/services/auth/verify/admin-verify-service';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class AdminVerifyController extends VerifyController {
  /**
   * Constructor.
   *
   * @param verifyService verification service.
   */
  public constructor(verifyService: AdminVerifyService) {
    super(verifyService);
  }
}
