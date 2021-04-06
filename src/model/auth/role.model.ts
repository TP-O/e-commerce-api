import { ModelMaker } from '@database/core';
import { Permission } from '@model/auth/permission.model';

export const Role = ModelMaker.make({
  table: 'roles',
  columns: ['id', 'name', 'created_at', 'updated_at'],
  fillable: ['name'],
  relationships: {
    hasMany: [
      {
        name: 'permissions',
        foreignKey: 'id',
        relatedModel: Permission,
        pivot: {
          table: 'permissions_roles',
          assetKey: 'permission_id',
          ownerKey: 'role_id',
        },
      },
    ],
  },
});
