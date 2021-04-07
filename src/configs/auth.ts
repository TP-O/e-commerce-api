import { Admin } from '@app/models/auth/admin';
import { Seller } from '@app/models/auth/seller';
import { User } from '@app/models/auth/user';
import { env } from 'process';

export const authConfig = {
  guard: {
    default: {
      model: User,
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
