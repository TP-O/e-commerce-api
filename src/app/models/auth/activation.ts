import { ModelMaker } from '@modules/database/core';

export const Activation = ModelMaker.make({
  table: 'activations',
  // prettier-ignore
  columns: [
    'id',
    'account_id',
    'code',
    'type',
    'created_at',
    'updated_at',
  ],
  // prettier-ignore
  fillable: [
    'account_id',
    'code','type'
  ],
  relationships: {},
});
