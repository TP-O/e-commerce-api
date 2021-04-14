import { RegistrationController } from '@app/controllers/auth/register/register-controller';
import { registerService } from '@app/services/auth/register/seller-register-service';
import { registerValidator } from '@app/validators/auth/register/seller-register-validator';
import { Request, Response } from 'express';

class SellerRegistrationController extends RegistrationController {
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
    // Validate seller's information
    const seller = await this.validator.validate(req.body);

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

export default new SellerRegistrationController();
