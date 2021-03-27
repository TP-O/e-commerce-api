import { ModelMaker } from 'database/core';
import { User } from 'model/user.model';

export const Product = ModelMaker.make({
  table: 'products',
  columns: ['id', 'name', 'price', 'created_at', 'updated_at'],
  fillable: ['name', 'price'],
  relationships: {
    belongsTo: [
      {
        name: 'user',
        foreignKey: 'user_Id',
        relatedModel: User,
      },
    ],
  },
});
