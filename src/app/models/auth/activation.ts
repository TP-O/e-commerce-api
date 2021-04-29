import { model } from '@modules/helper';

export const Activation = model({
  table: 'activations',
  // prettier-ignore
  columns: [
    'id',
    'accountId',
    'code',
    'accountType',
    'createdAt',
    'updatedAt',
  ],
  // prettier-ignore
  fillable: [
    'accountId',
    'code',
    'accountType',
  ],
  relationships: {},
});
