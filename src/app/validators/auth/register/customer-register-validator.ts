import Joi from 'joi';
import { Validator } from '@app/validators';
import { injectable } from 'tsyringe';
import { CustomerRegisterService } from '@app/services/auth/register/customer-register-service';

@injectable()
export class CustomerRegisterValidator extends Validator {
  /**
   * Constructor.
   *
   * @param userRegisterService user register service.
   */
  public constructor(private userRegisterService: CustomerRegisterService) {
    super();
  }

  /**
   * Make rules for the validator.
   */
  protected makeRules() {
    this.rules = Joi.object().keys({
      firstName: Joi.string().required().messages({
        'string.base': 'Name must be a string',
        'any.required': 'Name is required',
      }),
      middleName: Joi.string().messages({
        'string.base': 'Name must be a string',
      }),
      lastName: Joi.string().required().messages({
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
      password: Joi.string().min(5).required().messages({
        'string.base': 'Password must be a string',
        'string.min': 'Password must be at least 5 characters',
        'any.required': 'Password is required',
      }),
      confirm_password: Joi.any()
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
    const admin = await this.userRegisterService.findAccountByEmail(email);

    if (admin) {
      throw Error('Email is available');
    }
  }
}
