import { model } from '@modules/helper';
import  {Order} from '@app/models/shopping-cart/order';

export const OrderItem = model({
    table: 'order_items', 
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
      fillable: [
          'orderId',
          'productId',
          'addressId',
          'quantity',
          'price',
      ],
});

OrderItem.belongsTo({
  name: 'order',
  foreignKey: 'orderId',
  relatedModel: Order,
});

OrderItem.hasMany({
  name: 'products',
  foreignKey: 'productId',
  relatedModel: Order,
});

OrderItem.hasOne({
  name: 'shipping_address',
  foreignKey: 'addressId',
  relatedModel: Order,
});