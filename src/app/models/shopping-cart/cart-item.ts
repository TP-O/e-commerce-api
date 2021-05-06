import { model } from '@modules/helper';

export const CartItem = model({
  table: 'cart_items',
  // prettier-ignore
  columns: [
    'id',
    'cartId',
    'productId',
    'quantity',
    'price',
    'createdAt',
    'updatedAt',
  ],
  // prettier-ignore
  fillable: [
    'cartId',
    'productId',
    'quantity',
    'price',
  ],
});
