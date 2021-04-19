import { ModelMaker } from '@modules/database/core';
import { Permission } from '@app/models/auth/permission';

export const Role = ModelMaker.make({
  table: 'roles',
  // prettier-ignore
  columns: [
    'id',
    'name',
    'type',
    'created_at',
    'updated_at',
  ],
  // prettier-ignore
  fillable: [
    'name',
    'type',
  ],
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
