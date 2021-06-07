import Joi from 'joi';
import { Validator } from '@app/validators';
import { injectable } from 'tsyringe';

@injectable()
export class CreateOrderValidator extends Validator {
  protected makeRules() {
    this.rules = Joi.object().keys({
      addressId: Joi.number().required().messages({
        'any.required': 'AddressId is required',
        'number.base': 'AddressId must be a number',
      }),
    });
  }
}
