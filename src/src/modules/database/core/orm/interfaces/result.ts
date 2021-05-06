import { Collection } from 'collect.js';
import { Status } from '@modules/database/core/orm/interfaces/status';

export interface Result {
  data?: Collection<any>;
  status?: Status;
  error?: any;
}
