import { ModelMaker } from 'database/core';
import { Product } from 'model/product.model';
import { Role } from 'model/role.model';

export const User = ModelMaker.make({
  table: 'users',
  columns: ['id', 'name', 'password', 'created_at', 'updated_at'],
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
