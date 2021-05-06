import { RegisterController } from '@app/controllers/auth/register/register-controller';
import { AdminRegisterService } from '@app/services/auth/register/admin-register-service';
import { AdminRegisterValidator } from '@app/validators/auth/register/admin-register-validator';
import { Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class AdminRegisterController extends RegisterController {
  /**
   * Constructor.
   *
   * @param registerValidator registration validator.
   * @param registerService registration service.
   */
  public constructor(
    registerValidator: AdminRegisterValidator,
    registerService: AdminRegisterService,
  ) {
    super(registerValidator, registerService);
  }

  /**
   * Register an account.
   */
  public register = async (req: Request, res: Response) => {
    // Validate admin's information
    const admin = await this.registerValidator.validate(req.body);

    // Assign role to admin account
    const role = await this.registerService.findRoleByName(admin.role);
    admin.roleId = role.id;

    // Create admin account
    const id = await this.create(admin);

    // Create activation code
    const code = await this.createActivationCode(id);

    // Send activation email
    this.sendEmail(admin.email, code);

    return res.status(200).json({
      success: true,
      message: 'Signed up successfully',
    });
  };
}
