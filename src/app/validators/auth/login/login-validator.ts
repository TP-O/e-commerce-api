import Joi from 'joi';
import { Validator } from '@app/validators';

const rules = Joi.object().keys({
  email: Joi.string().email().required().messages({
    'string.base': 'Email must be a string',
    'string.email': 'Email is invalid',
    'any.required': 'Email is required',
  }),
  password: Joi.string().min(5).required().messages({
    'string.base': 'Password must be a string',
    'string.min': 'Password must be at least 5 characters',
    'any.required': 'Password is required',
  }),
});

export const loginValidator = new Validator(rules);
