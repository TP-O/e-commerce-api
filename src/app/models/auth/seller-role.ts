import { model } from '@modules/helper';

export const SellerRole = model({
  table: 'seller_roles',
  // prettier-ignore
  columns: [
    'id',
    'name',
    'createdAt',
    'updatedAt',
  ],
  // prettier-ignore
  fillable: [
    'name',
  ],
  relationships: {},
});
