import { Admin } from '@model/admin.model';
import { Salesman } from '@model/salesman.model';
import { User } from '@model/user.model';
import { env } from 'process';

export const authConfig = {
  guard: {
    default: {
      model: User,
    },
    admin: {
      model: Admin,
    },
    salesman: {
      model: Salesman,
    },
  },
  accessTokenExpiresIn: '1d',
  refreshTokenExpiresIn: '7d',
  cookieExpriresIn: 7 * 24 * 60 * 60 * 1000,
  jwtSecret: env.JWT_SECRET_KEY || 'hem co secret key',
};
