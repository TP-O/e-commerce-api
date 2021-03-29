import Joi from 'joi';
import { Validator } from '@validator';

const rules = Joi.object().keys({
  name: Joi.string().min(5).required(),
  email: Joi.string().required(),
  password: Joi.string().min(5).required(),
});

export const creatingValidator = new Validator(rules);
