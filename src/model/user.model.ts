import { ModelMaker } from '@database/core';
import { Role } from '@model/role.model';
import { Permission } from '@model/permission.model';

export const User = ModelMaker.make({
  table: 'users',
  columns: ['id', 'name', 'email', 'password', 'created_at', 'updated_at'],
  fillable: ['name', 'email', 'password'],
  relationships: {
    hasMany: [
      {
        name: 'roles',
        foreignKey: 'id',
        relatedModel: Role,
        pivot: {
          table: 'roles_users',
          assetKey: 'role_id',
          ownerKey: 'user_id',
        },
      },
      {
        name: 'permissions',
        foreignKey: 'id',
        relatedModel: Permission,
        pivot: {
          table: 'permissions_users',
          assetKey: 'permission_id',
          ownerKey: 'user_id',
        },
      },
    ],
  },
});
