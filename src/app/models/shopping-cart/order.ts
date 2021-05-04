import { model } from '@modules/helper';
import { OrderItem } from './order-item';

export const Order = model({
    table: 'orders', 
    columns: [
        'id',
        'customerId',
        'statusId',
        'createdAt',
        'updatedAt',
      ],
      fillable: [
        'customerId',
        'statusId',
      ],
});

Order.belongsTo({
  name: 'customer',
  foreignKey: 'customerId',
  relatedModel: OrderItem,
});

Order.hasOne({
  name: 'status',
  foreignKey: 'statusId',
  relatedModel: OrderItem,
});
