import { ModelMaker } from '@database/core';

export const Permission = ModelMaker.make({
  table: 'permissions',
  columns: ['id', 'name', 'created_at', 'updated_at'],
  fillable: ['name'],
  relationships: {},
});
