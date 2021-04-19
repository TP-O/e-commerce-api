import { env } from 'process';

export const mailerConfig = {
  service: env.EMAIL_SERVICE || 'gmail',
  address: env.EMAIL_ADDRESS || 'abc@gmail.com',
  password: env.EMAIL_PASSWORD || '',
};
