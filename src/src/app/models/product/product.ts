import { model } from '@modules/helper';

const Product = model({
  table: 'products',
  // prettier-ignore
  columns: [
    'id',
    'sellerId',
    'categoryId',
    'brandId',
    'name',
    'slug',
    'description',
    'price',
    'amount',
    'createdAt',
    'updatedAt',
  ],
  // prettier-ignore
  fillable: [
    'sellerId',
    'categoryId',
    'brandId',
    'name',
    'slug',
    'description',
    'price',
    'amount',
  ],
});

export { Product };
