import { ModelMaker } from '@modules/database/core';

export const RoleUser = ModelMaker.make({
  table: 'roles_uers',
  columns: ['id', 'user_id', 'role_id', 'created_at', 'updated_at'],
  fillable: ['user_id', 'role_id'],
  relationships: {},
});
