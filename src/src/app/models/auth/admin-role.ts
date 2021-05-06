import { model } from '@modules/helper';

export const AdminRole = model({
  table: 'admin_roles',
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
});
