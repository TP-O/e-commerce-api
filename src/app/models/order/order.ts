import { model } from '@modules/helper';
import { OrderItem } from '@app/models/order/order-item';

const Order = model({
  table: 'orders',
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

Order.hasMany({
  name: 'items',
  foreignKey: 'orderId',
  relatedModel: OrderItem,
});

export { Order };
