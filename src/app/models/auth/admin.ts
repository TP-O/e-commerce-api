import { model } from '@modules/helper';
import { AdminRole } from '@app/models/auth/admin-role';

export const Admin = model({
  table: 'admins',
  // prettier-ignore
  columns: [
    'id',
    'firstName',
    'middleName',
    'lastName',
    'email',
    'password',
    'active',
    'createdAt',
    'updatedAt',
  ],
  // prettier-ignore
  fillable: [
    'roleId',
    'firstName',
    'middleName',
    'lastName',
    'email',
    'password',
    'active',
  ],
  relationships: {
    belongsTo: [
      {
        name: 'role',
        foreignKey: 'roleId',
        relatedModel: AdminRole,
      },
    ],
  },
});
