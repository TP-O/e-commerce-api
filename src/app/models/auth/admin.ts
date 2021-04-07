import { ModelMaker } from '@modules/database/core';
import { Role } from '@app/models/auth/role';

export const Admin = ModelMaker.make({
  table: 'admins',
  columns: ['id', 'name', 'email', 'password', 'created_at', 'updated_at'],
  fillable: ['name', 'email', 'password'],
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
