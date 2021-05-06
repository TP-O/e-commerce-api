import { env } from 'process';

export const nodeConfig = {
  port: env.NODE_PORT || 8081,
  env: env.NODE_ENV || 'development',
  root: `${__dirname}/../`,
  appDir: `${__dirname}/../app/`,
};
