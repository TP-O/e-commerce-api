import Joi from 'joi';
import { Validator } from 'validator';

const rules = Joi.object().keys({
  name: Joi.string().min(5),
  password: Joi.string().min(5),
});

export const updatingValidator = new Validator(rules);
