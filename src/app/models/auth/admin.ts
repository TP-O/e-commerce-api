import { model } from '@modules/helper';
import { Role } from '@app/models/auth/role';

export const Admin = model({
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
