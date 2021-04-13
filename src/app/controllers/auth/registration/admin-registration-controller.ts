import { RegistrationController } from '@app/controllers/auth/registration/registration-controller';
import { registrationService } from '@app/services/auth/registration/admin-registration-service';
import { RegisterValidator } from '@app/validators/auth/admin/register-validator';
import { Request, Response } from 'express';

class AdminRegistrationController extends RegistrationController {
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
    // Validate admin's information
    const admin = await this.validator.validate(req.body);

    // Create admin account
    await this.create(admin);

    // Assign role to admin account
    const id = await this.assign(admin.email, admin.role);

    // Create activation code
    const code = await this.createActivationCode(id, 'admin');

    // Send activation email
    this.sendEmail(admin.email, code);

    res.status(200).json({
      success: true,
      message: 'Signed up successfully',
    });
  };
}

export default new AdminRegistrationController();
