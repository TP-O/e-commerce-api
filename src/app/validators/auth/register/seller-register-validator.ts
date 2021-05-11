import Joi from 'joi';
import { Validator } from '@app/validators';
import { injectable } from 'tsyringe';
import { SellerRegisterService } from '@app/services/auth/register/seller-register-service';

@injectable()
export class SellerRegisterValidator extends Validator {
  /**
   * Constructor.
   *
   * @param sellerRegisterService seller register service.
   */
  public constructor(private sellerRegisterService: SellerRegisterService) {
    super();
  }

  /**
   * Make rules for the validator.
   */
  protected makeRules() {
    this.rules = Joi.object().keys({
      storeName: Joi.string().required().messages({
        'string.base': 'Name must be a string',
        'any.required': 'Name is required',
      }),
      email: Joi.string()
        .email()
        .external(this.checkUnique.bind(this))
        .required()
        .messages({
          'string.base': 'Email must be a string',
          'string.email': 'Email is invalid',
          'any.required': 'Email is required',
        }),
      role: Joi.string()
        .external(this.checkRole.bind(this))
        .required()
        .messages({
          'string.base': 'Role must be a string',
          'any.required': 'Role is required',
        }),
      password: Joi.string().min(5).required().messages({
        'string.base': 'Password must be a string',
        'string.min': 'Password must be at least 5 characters',
        'any.required': 'Password is required',
      }),
      confirmPassword: Joi.any()
        .valid(Joi.ref('password'))
        .required()
        .messages({
          'string.base': 'Confirmed password must be a string',
          'any.required': 'Confirmed password is required',
          'any.only': 'Password not matched',
        }),
    });
  }

  private async checkUnique(email: string) {
    const admin = await this.sellerRegisterService.findAccountByEmail(email);

    if (admin) {
      throw Error('Email is available');
    }
  }

  private async checkRole(name: string) {
    const role = await this.sellerRegisterService.findRoleByName(name);

    if (!role) {
      throw Error('Role is unavailable');
    }
  }
}
