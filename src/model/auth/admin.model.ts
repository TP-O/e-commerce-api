import { ModelMaker } from '@database/core';
import { Role } from '@model/auth/role.model';

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
