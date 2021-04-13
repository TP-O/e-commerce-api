import { RegistrationController } from '@app/controllers/auth/registration/registration-controller';
import { registrationService } from '@app/services/auth/registration/user-registration-service';
import { RegisterValidator } from '@app/validators/auth/user/register-validator';
import { Request, Response } from 'express';

class UserRegistrationController extends RegistrationController {
  /**
   * Constructor.
   */
  public constructor() {
    super(RegisterValidator, registrationService);
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
}

export default new UserRegistrationController();
