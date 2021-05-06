import { model } from '@modules/helper';

const ProductCategory = model({
  table: 'product_categories',
  // prettier-ignore
  columns: [
    'id',
    'level',
    'left',
    'right',
    'name',
    'slug',
    'description',
    'createdAt',
    'updatedAt',
  ],
  // prettier-ignore
  fillable: [
    'level',
    'left',
    'right',
    'name',
    'slug',
    'description',
  ],
});

export { ProductCategory };
