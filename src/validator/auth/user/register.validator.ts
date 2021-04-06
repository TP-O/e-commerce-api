import Joi from 'joi';
import { Validator } from '@validator';
import { User } from '@model/auth/user.model';

const rules = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email().external(checkUnique).required(),
  password: Joi.string().min(5).required(),
  confirm_password: Joi.any().valid(Joi.ref('password')).required(),
});

async function checkUnique(email: string) {
  const { data } = await User.select('id')
    .where([['email', '=', `v:${email}`]])
    .get();

  if (data?.count()) {
    throw Error('Email is available');
  }
}

export const RegisterValidator = new Validator(rules);
