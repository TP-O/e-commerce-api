import { ModelMaker } from '@modules/database/core';

export const RoleSeller = ModelMaker.make({
  table: 'permissions_roles',
  // prettier-ignore
  columns: [
    'id',
    'permission_id',
    'role_id',
    'created_at',
    'updated_at'
  ],
  // prettier-ignore
  fillable: [
    'permission_id',
    'role_id'
  ],
  relationships: {},
});
