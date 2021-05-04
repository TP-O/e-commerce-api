import { model } from '@modules/helper';
import  {Cart} from '@app/models/shopping-cart/cart';

export const CartItem = model({
    table: 'cart_items', 
    columns: [
        'id',
        'cartId',
        'productId',
        'quantity',
        'price',
        'createdAt',
        'updatedAt',
      ],
      fillable: [
          'cartId',
          'productId',
          'quantity',
          'price',
      ],
});

CartItem.belongsTo({
  name: 'cart',
  foreignKey: 'cartId',
  relatedModel: Cart,
});

CartItem.belongsTo({
  name: 'product',
  foreignKey: 'productId',
  relatedModel: Cart,
});
