import { Request, Response } from 'express';
import { HttpRequestError } from 'app/exceptions/http-request-error';
import UserRegisterService from '@app/services/auth/user/register-service';
import { RegisterValidator } from '@app/validators/auth/user/register-validator';

class RegisterController {
  private readonly registerService = UserRegisterService;

  /**
   * Register user account.
   */
  public register = async (req: Request, res: Response) => {
    const value = await RegisterValidator.validate(req.body);

    const success = await this.registerService.registerAccount(value);

    if (!success) {
      throw new HttpRequestError(500, 'Account creation failed');
    }

    await this.assignRole(value.email);

    res.status(200).json({
      success: true,
      message: 'Signed up successfully',
    });
  };

  /**
   * Assign role to the user account.
   *
   * @param email user's email.
   */
  private assignRole = async (email: string) => {
    const user = await this.findUserByEmail(email);
    const role = await this.findRoleByName('Normal User');

    const error = await this.registerService.assignRole(user.id, role.id);

    if (error) {
      throw new HttpRequestError(500, 'Authorization failed');
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
      throw new HttpRequestError(404, 'Role not found');
    }

    return role;
  };

  /**
   * Find the user by email.
   *
   * @param email user's email.
   */
  private findUserByEmail = async (email: string) => {
    const user = await this.registerService.findUserByEmail(email);

    if (!user) {
      throw new HttpRequestError(404, 'User not found');
    }

    return user;
  };
}

export default new RegisterController();
