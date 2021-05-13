import Joi from 'joi';
import { Validator } from '@app/validators';
import { injectable } from 'tsyringe';

@injectable()
export class ResetPasswordValidator extends Validator {
  /**
   * Make rules for the validator.
   */
  protected makeRules() {
    this.rules = Joi.object().keys({
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
}
