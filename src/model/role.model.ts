import { ModelMaker } from '@database/core';

export const Role = ModelMaker.make({
  table: 'roles',
  columns: ['id', 'name', 'created_at', 'updated_at'],
  fillable: ['name'],
  relationships: {},
});
