import { model } from '@modules/helper';
import { SellerRole } from '@app/models/auth/seller-role';

const Seller = model({
  table: 'sellers',
  // prettier-ignore
  columns: [
    'id',
    'storeName',
    'email',
    'password',
    'active',
    'description',
    'createdAt',
    'updatedAt',
  ],
  // prettier-ignore
  fillable: [
    'roleId',
    'storeName',
    'email',
    'password',
    'active',
    'description',
  ],
});

Seller.belongsTo({
  name: 'role',
  foreignKey: 'roleId',
  relatedModel: SellerRole,
});

export { Seller };
