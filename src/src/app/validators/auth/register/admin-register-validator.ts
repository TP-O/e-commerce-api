import Joi from 'joi';
import { Validator } from '@app/validators';
import { injectable } from 'tsyringe';
import { AdminRegisterService } from '@app/services/auth/register/admin-register-service';

@injectable()
export class AdminRegisterValidator extends Validator {
  /**
   * Constructor.
   *
   * @param adminRegisterService admin register service.
   */
  public constructor(private adminRegisterService: AdminRegisterService) {
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
    const admin = await this.adminRegisterService.findAccountByEmail(email);

    if (admin) {
      throw Error('Email is available');
    }
  }

  private async checkRole(name: string) {
    const role = await this.adminRegisterService.findRoleByName(name);

    if (!role) {
      throw Error('Role is unavailable');
    }
  }
}
