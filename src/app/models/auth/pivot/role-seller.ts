import { ModelMaker } from '@modules/database/core';

export const RoleSeller = ModelMaker.make({
  table: 'roles_sellers',
  columns: ['id', 'seller_id', 'role_id', 'created_at', 'updated_at'],
  fillable: ['seller_id', 'role_id'],
  relationships: {},
});
