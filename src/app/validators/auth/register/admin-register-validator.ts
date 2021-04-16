import Joi from 'joi';
import { Validator } from '@app/validators';
import { Admin } from '@app/models/auth/admin';
import { Role } from '@app/models/auth/role';
import { injectable } from 'tsyringe';

@injectable()
export class AdminRegisterValidator extends Validator {
  /**
   * Make rules for the validator.
   */
  protected makeRules() {
    this.rules = Joi.object().keys({
      name: Joi.string().required().messages({
        'string.base': 'Name must be a string',
        'any.required': 'Name is required',
      }),
      email: Joi.string()
        .email()
        .external(this.checkUnique)
        .required()
        .messages({
          'string.base': 'Email must be a string',
          'string.email': 'Email is invalid',
          'any.required': 'Email is required',
        }),
      role: Joi.string().external(this.checkRole).required().messages({
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
    const { data } = await Admin.select('id')
      .where([['email', '=', `v:${email}`]])
      .get();

    if (data?.count()) {
      throw Error('Email is available');
    }
  }

  private async checkRole(name: string) {
    const { data } = await Role.select('id')
      .where([
        ['name', '=', `v:${name}`],
        ['type', '=', 'v:admin'],
      ])
      .get();

    if (!data?.count()) {
      throw Error('Role is unavailable');
    }
  }
}
