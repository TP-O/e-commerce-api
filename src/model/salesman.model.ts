import { ModelMaker } from 'database/core';
import { Role } from 'model/role.model';
import { Permission } from 'model/permission.model';

export const Salesman = ModelMaker.make({
  table: 'salesmans',
  columns: ['id', 'name', 'email', 'password', 'created_at', 'updated_at'],
  fillable: ['name', 'email', 'password'],
  relationships: {
    hasMany: [
      {
        name: 'roles',
        foreignKey: 'id',
        relatedModel: Role,
        pivot: {
          table: 'role_salesman',
          assetKey: 'role_id',
          ownerKey: 'salesman_id',
        },
      },
      {
        name: 'permissions',
        foreignKey: 'id',
        relatedModel: Permission,
        pivot: {
          table: 'permission_salesman',
          assetKey: 'permission_id',
          ownerKey: 'salesman_id',
        },
      },
    ],
  },
});
