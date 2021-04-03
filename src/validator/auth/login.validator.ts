import Joi from 'joi';
import { Validator } from '@validator';

const rules = Joi.object().keys({
  email: Joi.string().required(),
  password: Joi.string().min(4).required(),
});

export const LoginValidator = new Validator(rules);
