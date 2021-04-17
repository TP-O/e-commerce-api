import { ModelMaker } from '@modules/database/core';
import { Role } from '@app/models/auth/role';

export const Admin = ModelMaker.make({
  table: 'admins',
  // prettier-ignore
  columns: [
    'id',
    'name',
    'email',
    'password',
    'active',
    'created_at',
    'updated_at',
  ],
  // prettier-ignore
  fillable: [
    'name',
    'email',
    'password',
    'active',
  ],
  relationships: {
    hasMany: [
      {
        name: 'roles',
        foreignKey: 'id',
        relatedModel: Role,
        pivot: {
          table: 'admins_roles',
          assetKey: 'role_id',
          ownerKey: 'admin_id',
        },
      },
    ],
  },
});
