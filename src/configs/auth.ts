import { Admin } from '@app/models/auth/admin';
import { Seller } from '@app/models/auth/seller';
import { Customer } from '@app/models/auth/customer';
import { env } from 'process';

export const authConfig = {
  guard: {
    default: {
      model: Customer,
    },
    admin: {
      model: Admin,
    },
    seller: {
      model: Seller,
    },
  },
  accessTokenExpiresIn: '1d',
  refreshTokenExpiresIn: '7d',
  cookieExpriresIn: 7 * 24 * 60 * 60 * 1000,
  jwtSecret: env.JWT_SECRET_KEY || 'hem co secret key',
};
