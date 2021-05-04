import { model } from '@modules/helper';

export const OrderStatus = model({
    table: 'order_status', 
    columns: [
        'id',
        'name',
        'createdAt',
        'updatedAt',
      ],
      fillable: [
        'name',
      ],
});
