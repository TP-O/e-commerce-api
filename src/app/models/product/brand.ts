import { model } from '@modules/helper';
import { Product } from '@app/models/product/product';

const Brand = model({
  table: 'brands',
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

Brand.hasMany({
  name: 'products',
  foreignKey: 'brandId',
  relatedModel: Product,
});

export { Brand };
