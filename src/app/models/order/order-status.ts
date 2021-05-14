import { model } from '@modules/helper';

export const OrderStatus = model({
  table: 'order_status',
  // prettier-ignore
  columns: [
    'id',
    'name',
    'createdAt',
    'updatedAt',
  ],
  // prettier-ignore
  fillable: [
    'name',
    'updatedAt',
  ],
});
