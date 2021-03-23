import { Model } from 'database/core';
import User from 'model/user.model';

const schema = {
  id: '',
  name: '',
  price: '',
};

const product = new Model('products', schema);

product.relationship.belongsTo({
  name: 'user',
  ownerKey: 'user_id',
  relatedKey: 'id',
  relatedModel: User,
});

export default product;
