import { nodeConfig } from '@configs/node';

export const loggerConfig = {
  filename: 'access.log',
  interval: '1d',
  path: `${nodeConfig.root}/log`,
};
