import { ModelMaker } from '@modules/database/core';

export const AdminRole = ModelMaker.make({
  table: 'admins_roles',
  columns: ['id', 'admin_id', 'role_id', 'created_at', 'updated_at'],
  fillable: ['admin_id', 'role_id'],
  relationships: {},
});
