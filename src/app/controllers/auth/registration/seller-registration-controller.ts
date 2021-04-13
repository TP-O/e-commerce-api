import { RegistrationController } from '@app/controllers/auth/registration/registration-controller';
import { registrationService } from '@app/services/auth/registration/seller-registration-service';
import { RegisterValidator } from '@app/validators/auth/seller/register-validator';
import { Request, Response } from 'express';

class SellerRegistrationController extends RegistrationController {
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
}

export default new SellerRegistrationController();
