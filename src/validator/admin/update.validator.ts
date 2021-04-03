import Joi from 'joi';
import { Validator } from '@validator';

const rules = Joi.object().keys({
  name: Joi.string().min(5),
  email: Joi.string(),
  password: Joi.string().min(5),
});

export const UpdatingValidator = new Validator(rules);
