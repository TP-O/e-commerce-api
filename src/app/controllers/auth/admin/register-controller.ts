import { Request, Response } from 'express';
import { HttpRequestError } from 'app/exceptions/http-request-error';
import AdminRegisterService from '@app/services/auth/admin/register-service';
import { RegisterValidator } from '@app/validators/auth/admin/register-validator';

class RegisterController {
  private readonly registerService = AdminRegisterService;

  /**
   * Register admin account.
   */
  public register = async (req: Request, res: Response) => {
    const value = await RegisterValidator.validate(req.body);

    const success = await this.registerService.registerAccount(value);

    if (!success) {
      throw new HttpRequestError(500, 'can not create account');
    }

    await this.assignRole(value.email, value.role);

    res.status(200).json({
      success: true,
      message: 'signed up successfully',
    });
  };

  /**
   * Grant permissions for admin account.
   */
  private assignRole = async (email: string, roleName: string) => {
    const admin = await this.findAdminByEmail(email);
    const role = await this.findRoleByName(roleName);

    const error = await this.registerService.assignRole(admin.id, role.id);

    if (error) {
      throw new HttpRequestError(
        500,
        'can not assign role to this account',
      );
    }
  };

  /**
   * Find role by name.
   *
   * @param name role's name.
   */
  private findRoleByName = async (name: string) => {
    const role = await this.registerService.findRoleByName(name);

    if (!role) {
      throw new HttpRequestError(404, 'role not found');
    }

    return role;
  };

  /**
   * Find the admin by email.
   *
   * @param email admin's email.
   */
  private findAdminByEmail = async (email: string) => {
    const admin = await this.registerService.findAdminByEmail(email);

    if (!admin) {
      throw new HttpRequestError(404, 'admin not found');
    }

    return admin;
  };
}

export default new RegisterController();
