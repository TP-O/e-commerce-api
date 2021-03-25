import Joi from 'joi';
import { ModelMaker } from 'database/core';
import { Product } from 'model/product.model';

export const User = ModelMaker.make({
  table: 'users',
  schema: {
    id: Joi.number(),
    name: Joi.string().required(),
    password: Joi.string().required(),
    created_at: Joi.date(),
    updated_at: Joi.date(),
  },
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
