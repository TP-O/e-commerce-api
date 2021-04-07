import Joi from 'joi';
import { Validator } from '@app/validators';
import { Admin } from '@app/models/auth/admin';
import { Role } from '@app/models/auth/role';

const rules = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email().external(checkUnique).required(),
  role: Joi.string().external(checkRole).required(),
  password: Joi.string().min(5).required(),
  confirm_password: Joi.any().valid(Joi.ref('password')).required(),
});

async function checkUnique(email: string) {
  const { data } = await Admin.select('id')
    .where([['email', '=', `v:${email}`]])
    .get();

  if (data?.count()) {
    throw Error('Email is available');
  }
}

async function checkRole(name: string) {
  const { data } = await Role.select('id')
    .where([
      ['name', '=', `v:${name}`],
      ['type', '=', 'v:seller'],
    ])
    .get();

  if (!data?.count()) {
    throw Error('Role is unavailable');
  }
}

export const RegisterValidator = new Validator(rules);
