import { RegisterController } from '@app/controllers/auth/register/register-controller';
import { UserRegisterService } from '@app/services/auth/register/user-register-service';
import { UserRegisterValidator } from '@app/validators/auth/register/user-register-validator';
import { Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class UserRegisterController extends RegisterController {
  /**
   * Constructor.
   *
   * @param registerValidator registration validator.
   * @param registerService registration service.
   */
  public constructor(
    registerValidator: UserRegisterValidator,
    registerService: UserRegisterService,
  ) {
    super(registerValidator, registerService);
  }

  /**
   * Register an account.
   */
  public register = async (req: Request, res: Response) => {
    // Validate user's information
    const user = await this.registerValidator.validate(req.body);

    // Create user account
    await this.create(user);

    // Assign role to user account
    const id = await this.assign(user.email, 'normal user');

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
