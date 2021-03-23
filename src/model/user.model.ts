import { Model } from '@database/core';
import Product from '@model/product.model';

const schema = {
  id: '',
  name: '',
  password: '',
};

const user = new Model('users', schema);

user.fillable = ['name', 'password'];

user.relationship.hasMany({
  name: 'products',
  relatedKey: 'user_id',
  relatedModel: Product,
});

export default user;
