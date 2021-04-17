import { ModelMaker } from '@modules/database/core';

export const Permission = ModelMaker.make({
  table: 'permissions',
  // prettier-ignore
  columns: [
    'id',
    'name',
    'created_at',
    'updated_at',
  ],
  // prettier-ignore
  fillable: [
    'name',
  ],
  relationships: {},
});
