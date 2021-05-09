import { model } from '@modules/helper';

export const AddressType = model({
  table: 'address_types',
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
});
