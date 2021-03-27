import Joi from 'joi';
import { ModelMaker } from 'database/core';
import { Product } from 'model/product.model';
import { Role } from 'model/role.model';

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
  relationships: {
    hasMany: [
      {
        name: 'products',
        foreignKey: 'user_id',
        relatedModel: Product,
      },
      {
        name: 'roles',
        foreignKey: 'id',
        relatedModel: Role,
        pivot: {
          table: 'role_users',
          assetKey: 'role_id',
          ownerKey: 'user_id',
        },
      },
    ],
  },
});
