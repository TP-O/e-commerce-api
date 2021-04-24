import { model } from '@modules/helper';
import { Permission } from '@app/models/auth/permission';

export const Role = model({
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
