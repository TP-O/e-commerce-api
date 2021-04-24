import { model } from '@modules/helper';

export const AdminRole = model({
  table: 'admins_roles',
  // prettier-ignore
  columns: [
    'id',
    'admin_id',
    'role_id',
    'created_at',
    'updated_at',
  ],
  // prettier-ignore
  fillable: [
    'admin_id',
    'role_id',
  ],
  relationships: {},
});
