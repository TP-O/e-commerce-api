import { model } from '@modules/helper';
import { ShippingAddress } from '@app/models/order/shipping-address';
import { OrderStatus } from '@app/models/order/order-status';
import { Product } from '@app/models/product/product';

const OrderItem = model({
  table: 'order_items',
  // prettier-ignore
  columns: [
    'id',
    'orderId',
    'productId',
    'addressId',
    'statusId',
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
    'statusId',
    'quantity',
    'price',
  ],
});

OrderItem.belongsTo({
  name: 'address',
  foreignKey: 'addressId',
  relatedModel: ShippingAddress,
});

OrderItem.belongsTo({
  name: 'product',
  foreignKey: 'productId',
  relatedModel: Product,
});

OrderItem.belongsTo({
  name: 'status',
  foreignKey: 'statusId',
  relatedModel: OrderStatus,
});

export { OrderItem };
