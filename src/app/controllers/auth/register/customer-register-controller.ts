import { RegisterController } from '@app/controllers/auth/register/register-controller';
import { CustomerRegisterService } from '@app/services/auth/register/customer-register-service';
import { CustomerRegisterValidator } from '@app/validators/auth/register/customer-register-validator';
import { Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class CustomerRegisterController extends RegisterController {
  /**
   * Constructor.
   *
   * @param registerValidator registration validator.
   * @param registerService registration service.
   */
  public constructor(
    registerValidator: CustomerRegisterValidator,
    registerService: CustomerRegisterService,
  ) {
    super(registerValidator, registerService);
  }

  /**
   * Register an account.
   */
  public register = async (req: Request, res: Response) => {
    // Validate user's information
    const user = await this.registerValidator.validate(req.body);

    // Assign role to user account
    const role = await this.findRoleByName('normal customer');
    user.roleId = role.id;

    // Create user account
    const id = await this.create(user);

    // Create activation code
    const code = await this.createActivationCode(id);

    // Send activation email
    this.sendEmail(user.email, code);

    return res.status(200).json({
      success: true,
      message: 'Signed up successfully',
    });
  };
}
