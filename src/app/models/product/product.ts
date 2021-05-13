import { model } from '@modules/helper';
import { Feedback } from '@app/models/product/feedback';
import { Brand } from '@app/models/product/brand';
import { Category } from '@app/models/product/category';
import { Seller } from '@app/models/auth/seller';

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
    'price',
    'description',
    'quantity',
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
    'price',
    'description',
    'quantity',
  ],
});

Product.hasMany({
  name: 'feedbacks',
  foreignKey: 'productId',
  relatedModel: Feedback,
});

Product.belongsTo({
  name: 'brand',
  foreignKey: 'brandId',
  relatedModel: Brand,
});

Product.belongsTo({
  name: 'category',
  foreignKey: 'categoryId',
  relatedModel: Category,
});

Product.belongsTo({
  name: 'seller',
  foreignKey: 'sellerId',
  relatedModel: Seller,
});

export { Product };
