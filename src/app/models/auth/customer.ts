import { model } from '@modules/helper';
import { CustomerRole } from '@app/models/auth/customer-role';

export const Customer = model({
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
  relationships: {
    belongsTo: [
      {
        name: 'role',
        foreignKey: 'roleId',
        relatedModel: CustomerRole,
      },
    ],
  },
});
