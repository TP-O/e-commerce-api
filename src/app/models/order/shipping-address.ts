import { model } from '@modules/helper';
import { AddressType } from '@app/models/order/address-type';

export const ShippingAddress = model({
  table: 'shipping_addresses',
  // prettier-ignore
  columns: [
    'id',
    'customerId',
    'typeId',
    'fullName',
    'phoneNumber',
    'city',
    'district',
    'ward',
    'address',
    'createdAt',
    'updatedAt',
  ],
  // prettier-ignore
  fillable: [
    'customerId',
    'typeId',
    'fullName',
    'phoneNumber',
    'city',
    'district',
    'ward',
    'address',
  ],
});

ShippingAddress.belongsTo({
  name: 'customer',
  foreignKey: 'customerId',
  relatedModel: AddressType,
});

ShippingAddress.belongsTo({
  name: 'address_types',
  foreignKey: 'typeId',
  relatedModel: AddressType,
});
