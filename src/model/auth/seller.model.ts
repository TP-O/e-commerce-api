import { ModelMaker } from '@database/core';
import { Role } from '@model/auth/role.model';

export const Seller = ModelMaker.make({
  table: 'sellers',
  columns: ['id', 'name', 'email', 'password', 'created_at', 'updated_at'],
  fillable: ['name', 'email', 'password'],
  relationships: {
    hasMany: [
      {
        name: 'roles',
        foreignKey: 'id',
        relatedModel: Role,
        pivot: {
          table: 'roles_sellers',
          assetKey: 'role_id',
          ownerKey: 'seller_id',
        },
      },
    ],
  },
});
