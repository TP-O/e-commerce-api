import { ModelMaker } from 'database/core';
import { User } from 'model/user.model';

const schema = {
  id: '',
  name: '',
  price: '',
  created_at: '',
  updated_at: '',
};

export const Product = ModelMaker.make({
  table: 'products',
  schema: schema,
  fillable: ['name', 'price'],
  relationships: [
    {
      type: 'belongsTo',
      infor: {
        name: 'user',
        ownerKey: 'user_id',
        relatedKey: 'id',
        relatedModel: User,
      },
    },
  ],
});
