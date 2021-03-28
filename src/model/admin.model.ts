import { ModelMaker } from 'database/core';
import { Role } from 'model/role.model';
import { Permission } from 'model/permission.model';

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
          table: 'admin_role',
          assetKey: 'role_id',
          ownerKey: 'admin_id',
        },
      },
      {
        name: 'permissions',
        foreignKey: 'id',
        relatedModel: Permission,
        pivot: {
          table: 'admin_permission',
          assetKey: 'permission_id',
          ownerKey: 'admin_id',
        },
      },
    ],
  },
});
