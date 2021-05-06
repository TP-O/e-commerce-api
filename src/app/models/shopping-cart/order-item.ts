import { model } from '@modules/helper';

export const OrderItem = model({
  table: 'order_items',
  // prettier-ignore
  columns: [
    'id',
    'orderId',
    'productId',
    'addressId',
    'quantity',
    'price',
    'createdAt',
    'updatedAt',
  ],
  // prettier-ignore
  fillable: [
    'orderId',
    'productId',
    'addressId',
    'quantity',
    'price',
  ],
});
