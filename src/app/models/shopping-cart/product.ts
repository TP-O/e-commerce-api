import { model } from '@modules/helper';

export const Product = model({
  table: 'products',
  columns: ['id', 'price', 'createdAt', 'updatedAt'],
  fillable: [],
});
