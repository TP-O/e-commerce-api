import { Request, Response } from 'express';
import { HttpRequestError } from '@exception/http-request-error';
import SellerRegisterService from '@service/auth/seller/register.service';
import { RegisterValidator } from '@validator/auth/seller/register.validator';

class RegisterController {
  private readonly registerService = SellerRegisterService;

  /**
   * Register seller account.
   */
  public register = async (req: Request, res: Response) => {
    const value = await RegisterValidator.validate(req.body);

    const success = await this.registerService.registerAccount(value);

    if (!success) {
      throw new HttpRequestError(500, 'Can not create account');
    }

    await this.assignRole(value.email, value.role);

    res.status(200).json({
      success: true,
      message: 'Registration successfully',
    });
  };

  /**
   * Grant permissions for seller account.
   */
  private assignRole = async (email: string, roleName: string) => {
    const seller = await this.findSellerByEmail(email);
    const role = await this.findRoleByName(roleName);

    const error = await this.registerService.assignRole(seller.id, role.id);

    if (error) {
      throw new HttpRequestError(500, 'Can not assign role to this account');
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
   * Find the seller by email.
   *
   * @param email seller's email.
   */
  private findSellerByEmail = async (email: string) => {
    const seller = await this.registerService.findSellerByEmail(email);

    if (!seller) {
      throw new HttpRequestError(404, 'Seller not found');
    }

    return seller;
  };
}

export default new RegisterController();
