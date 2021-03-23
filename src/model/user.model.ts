import { ModelMaker } from 'database/core';
import { Product } from 'model/product.model';

const schema = {
  id: '',
  name: '',
  password: '',
  created_at: '',
  updated_at: '',
};

export const User = ModelMaker.make({
  table: 'users',
  schema: schema,
  fillable: ['name', 'password'],
  relationships: [
    {
      type: 'hasMany',
      infor: {
        name: 'products',
        relatedKey: 'user_id',
        relatedModel: Product,
      },
    },
  ],
});
