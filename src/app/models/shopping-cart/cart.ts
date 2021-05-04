import { model } from '@modules/helper';
import { CartItem } from './cart-item';

export const Cart = model({
    table: 'carts', 
    columns: [
        'id',
        'customerId',
        'createdAt',
        'updatedAt',
      ],
      fillable: [
        'customerId',
      ],
});

Cart.belongsTo({
  name: 'customer',
  foreignKey: 'customerId',
  relatedModel: CartItem,
});
