import { env } from 'process';
import root from 'app-root-path';

export const nodeConfig = {
  port: env.NODE_PORT || 8081,
  env: env.NODE_ENV || 'development',
  root: root.path,
};
