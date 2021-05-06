import { model } from '@modules/helper';

export const Order = model({
  table: 'orders',
  // prettier-ignore
  columns: [
    'id',
    'customerId',
    'statusId',
    'createdAt',
    'updatedAt',
  ],
  // prettier-ignore
  fillable: [
    'customerId',
    'statusId',
  ],
});
