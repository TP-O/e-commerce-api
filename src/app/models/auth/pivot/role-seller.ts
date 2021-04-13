import { ModelMaker } from '@modules/database/core';

export const RoleSeller = ModelMaker.make({
  table: 'roles_sellers',
  // prettier-ignore
  columns: [
    'id',
    'seller_id',
    'role_id',
    'created_at',
    'updated_at'
  ],
  // prettier-ignore
  fillable: [
    'seller_id',
    'role_id'
  ],
  relationships: {},
});
