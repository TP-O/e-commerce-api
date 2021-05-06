import { RegisterController } from '@app/controllers/auth/register/register-controller';
import { SellerRegisterService } from '@app/services/auth/register/seller-register-service';
import { SellerRegisterValidator } from '@app/validators/auth/register/seller-register-validator';
import { Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class SellerRegisterController extends RegisterController {
  /**
   * Constructor.
   *
   * @param registerValidator registration validator.
   * @param registerService registration service.
   */
  public constructor(
    registerValidator: SellerRegisterValidator,
    registerService: SellerRegisterService,
  ) {
    super(registerValidator, registerService);
  }

  /**
   * Register an account.
   */
  public register = async (req: Request, res: Response) => {
    // Validate seller's information
    const seller = await this.registerValidator.validate(req.body);

    // Assign role to seller account
    const role = await this.registerService.findRoleByName(seller.role);
    seller.roleId = role.id;

    // Create seller account
    const id = await this.create(seller);

    // Create activation code
    const code = await this.createActivationCode(id);

    // Send activation email
    this.sendEmail(seller.email, code);

    return res.status(200).json({
      success: true,
      message: 'Signed up successfully',
    });
  };
}
