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

    // Create seller account
    await this.create(seller);

    // Assign role to seller account
    const id = await this.assign(seller.email, seller.role);

    // Create activation code
    const code = await this.createActivationCode(id, 'seller');

    // Send activation email
    this.sendEmail(seller.email, code);

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

    const code = await this.createActivationCode(req.user.id, 'seller');

    this.sendEmail(req.user.email, code);

    res.status(200).json({
      success: true,
      message: 'Activation email has been sent',
    });
  };
}
