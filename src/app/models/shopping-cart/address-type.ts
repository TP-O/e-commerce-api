import { model } from '@modules/helper';

export const AddressType = model({
    table: 'address_types', 
    columns: [
        'id',
        'name',
        'createdAt',
        'updatedAt',
      ],
      fillable: [
        'name',
      ],
});
