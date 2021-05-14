import { model } from '@modules/helper';
import { CartItem } from './cart-item';

export const Cart = model({
  table: 'carts',
  // prettier-ignore
  columns: [
    'id',
    'customerId',
    'createdAt',
    'updatedAt',
  ],
  // prettier-ignore
  fillable: [
    'customerId',
  ],
});

Cart.hasMany({
  name: 'items',
  foreignKey: 'cartId',
  relatedModel: CartItem,
});
