import Joi from 'joi';
import { Validator } from '@app/validators';
import { injectable } from 'tsyringe';

@injectable()
export class ForgotPasswordValidator extends Validator {
  /**
   * Make rules for the validator.
   */
  protected makeRules() {
    this.rules = Joi.object().keys({
      email: Joi.string().email().required().messages({
        'string.base': 'Email must be a string',
        'string.email': 'Email is invalid',
        'any.required': 'Email is required',
      }),
    });
  }
}
