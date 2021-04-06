import Joi from 'joi';
import { Validator } from '@validator';
import { Admin } from '@model/auth/admin.model';
import { Role } from '@model/auth/role.model';

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
      ['type', '=', 'v:admin'],
    ])
    .get();

  if (!data?.count()) {
    throw Error('Role is unavailable');
  }
}

export const RegisterValidator = new Validator(rules);
