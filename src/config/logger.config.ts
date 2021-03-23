import { nodeConfig } from 'config/node.config';

export const loggerConfig = {
  filename: 'access.log',
  interval: '1d',
  path: `${nodeConfig.root}/log`,
};
