import { RegistrationController } from '@app/controllers/auth/register/register-controller';
import { registerService } from '@app/services/auth/register/user-register-service';
import { registerValidator } from '@app/validators/auth/register/user-register-validator';
import { Request, Response } from 'express';

class UserRegistrationController extends RegistrationController {
  /**
   * Constructor.
   */
  public constructor() {
    super(registerValidator, registerService);
  }

  /**
   * Register an account.
   */
  public register = async (req: Request, res: Response) => {
    // Validate user's information
    const user = await this.validator.validate(req.body);

    // Create user account
    await this.create(user);

    // Assign role to user account
    const id = await this.assign(user.email, 'normal user');

    // Create activation code
    const code = await this.createActivationCode(id, 'user');

    // Send activation email
    this.sendEmail(user.email, code);

    res.status(200).json({
      success: true,
      message: 'Signed up successfully',
    });
  };

  /**
   * Resend activation email.
   */
  public resendEmail = async (req: Request, res: Response) => {
    // Check the account is exists
    await this.findAccountByEmail(req.user.email);

    const code = await this.createActivationCode(req.user.id, 'user');

    this.sendEmail(req.user.email, code);

    res.status(200).json({
      success: true,
      message: 'Activation email has been sent',
    });
  };
}

export default new UserRegistrationController();
