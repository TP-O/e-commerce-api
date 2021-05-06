import { model } from '@modules/helper';

const Brand = model({
  table: 'brands',
  // prettier-ignore
  columns: [
    'id',
    'name',
    'slug',
    'createdAt',
    'updatedAt',
  ],
  // prettier-ignore
  fillable: [
    'name',
    'slug',
  ],
});

export { Brand };
