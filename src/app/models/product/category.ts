import { model } from '@modules/helper';

const Category = model({
  table: 'product_categories',
  // prettier-ignore
  columns: [
    'id',
    'name',
    'slug',
    'left',
    'right',
    'level',
    'createdAt',
    'updatedAt',
  ],
  // prettier-ignore
  fillable: [
    'name',
    'slug',
    'left',
    'right',
    'level',
  ],
});

export { Category };
