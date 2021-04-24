import { model } from '@modules/helper';

export const RoleUser = model({
  table: 'roles_users',
  // prettier-ignore
  columns: [
    'id',
    'user_id',
    'role_id',
    'created_at',
    'updated_at'
  ],
  // prettier-ignore
  fillable: [
    'user_id',
    'role_id',
  ],
  relationships: {},
});
