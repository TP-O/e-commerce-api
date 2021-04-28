import { model } from '@modules/helper';

export const CustomerRole = model({
  table: 'customer_roles',
  // prettier-ignore
  columns: [
    'id',
    'name',
    'createdAt',
    'updatedAt',
  ],
  // prettier-ignore
  fillable: [
    'name',
  ],
  relationships: {},
});
