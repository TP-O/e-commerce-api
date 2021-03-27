import { ModelMaker } from 'database/core';
import { User } from 'model/user.model';

export const Role = ModelMaker.make({
  table: 'roles',
  columns: ['id', 'name', 'created_at', 'updated_at'],
  fillable: ['name'],
  relationships: {
    belongsToMany: [
      {
        name: 'users',
        assetKey: 'id',
        ownerKey: 'id',
        relatedModel: User,
        pivot: {
          table: 'role_users',
          assetKey: 'role_id',
          ownerKey: 'user_id',
        },
      },
    ],
  },
});
