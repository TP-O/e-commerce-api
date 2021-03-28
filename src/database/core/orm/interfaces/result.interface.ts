import { Collection } from 'collect.js';
import { Status } from '@database/core/orm/interfaces/status.interface';

export interface Result {
  data?: Collection<any>;
  status?: Status;
  error?: any;
}
