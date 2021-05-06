import { Customer } from '@app/models/auth/customer';
import { VerifyService } from '@app/services/auth/verify/verify-service';
import { singleton } from 'tsyringe';

@singleton()
export class CustomerVerifyService extends VerifyService {
  /**
   * Constructor.
   */
  public constructor() {
    super(Customer, 'customer');
  }
}
