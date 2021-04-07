import Joi from 'joi';
import { Validator } from '@app/validators';

const rules = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().min(5).required(),
});

export const LoginValidator = new Validator(rules);
