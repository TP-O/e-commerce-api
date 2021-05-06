import { Customer } from '@app/models/auth/customer';
import { CustomerRole } from '@app/models/auth/customer-role';
import { RegisterService } from '@app/services/auth/register/register-service';
import { singleton } from 'tsyringe';

@singleton()
export class CustomerRegisterService extends RegisterService {
  /**
   * Constructor.
   */
  public constructor() {
    super(Customer, CustomerRole, 'customer');
  }
}
