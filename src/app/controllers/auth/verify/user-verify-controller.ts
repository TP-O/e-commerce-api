import { VerifyController } from '@app/controllers/auth/verify/verify-controller';
import { UserVerifyService } from '@app/services/auth/verify/user-verify-service';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class UserVerifyController extends VerifyController {
  /**
   * Constructor.
   *
   * @param verifyService verification service.
   */
  public constructor(verifyService: UserVerifyService) {
    super(verifyService);
  }
}
