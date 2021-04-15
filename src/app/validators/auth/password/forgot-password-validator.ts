import Joi from 'joi';
import { Validator } from '@app/validators';

const rules = Joi.object().keys({
  email: Joi.string().email().required().messages({
    'string.base': 'Email must be a string',
    'string.email': 'Email is invalid',
    'any.required': 'Email is required',
  }),
});

export const forgotPasswordValidator = new Validator(rules);
