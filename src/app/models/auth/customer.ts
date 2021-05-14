import { model } from '@modules/helper';
import { CustomerRole } from '@app/models/auth/customer-role';
import { Order } from '@app/models/order/order';

const Customer = model({
  table: 'customers',
  // prettier-ignore
  columns: [
    'id',
    'firstName',
    'middleName',
    'lastName',
    'email',
    'password',
    'active',
    'createdAt',
    'updatedAt',
  ],
  // prettier-ignore
  fillable: [
    'roleId',
    'firstName',
    'middleName',
    'lastName',
    'email',
    'password',
    'active',
  ],
});

Customer.belongsTo({
  name: 'role',
  foreignKey: 'roleId',
  relatedModel: CustomerRole,
});

Customer.hasMany({
  name: 'orders',
  foreignKey: 'customerId',
  relatedModel: Order,
});

export { Customer };
