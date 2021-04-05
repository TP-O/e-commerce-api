import { Admin } from '@model/auth/admin.model';
import { Seller } from '@model/auth/seller.model';
import { User } from '@model/auth/user.model';
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
