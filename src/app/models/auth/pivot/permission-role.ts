import { ModelMaker } from '@modules/database/core';

export const RoleSeller = ModelMaker.make({
  table: 'permissions_roles',
  columns: ['id', 'permission_id', 'role_id', 'created_at', 'updated_at'],
  fillable: ['permission_id', 'role_id'],
  relationships: {},
});
