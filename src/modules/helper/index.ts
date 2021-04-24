import { container } from 'tsyringe';

//=================================================================
import { ModelInfor } from '@modules/database/core/orm/interfaces/model-infor';
import { Maker } from '@modules/database/core/orm/maker';

/**
 * Make a model.
 */
export function model(model: ModelInfor) {
  return container.resolve(Maker).make(model);
}

//=================================================================
import { Auth } from '@modules/auth';

/**
 * Verify an token.
 */
export function verify(token: string) {
  return container.resolve(Auth).verify(token);
}

/**
 * Authentication.
 */
export function auth(guard = 'default') {
  return container.resolve(Auth).guard(guard);
}

//=================================================================
import { Options } from 'nodemailer/lib/mailer';
import { Mailer } from '@modules/mailer';

/**
 * Send an email.
 */
export function sender(options: Options) {
  return container.resolve(Mailer).send(options);
}

//=================================================================
import { Database } from '@modules/database/core/database';

/**
 * Excuete query.
 */
export function database(cb: (q: Database) => any) {
  return cb(container.resolve(Database));
}

//=================================================================
/**
 * Only format data from model.
 */
export function format(data: any) {
  if (data === undefined || data === null) {
    return null;
  }

  if (!Array.isArray(data)) {
    for (const [prop, value] of Object.entries(data.data)) {
      if (typeof value === 'object' && value?.constructor.name !== 'Date') {
        data.data[prop] = format(data.data[prop]);
      }
    }

    return data.data;
  }

  return data.map((d: any) => {
    for (const [prop, value] of Object.entries(d.data)) {
      if (typeof value === 'object' && value?.constructor.name !== 'Date') {
        d.data[prop] = format(d.data[prop]);
      }
    }

    return d.data;
  });
}
