import { model } from '@modules/helper';

const Ads = model({
  table: 'advertisement_strategies',
  columns: [
    'id',
    'categoryId',
    'typeId',
    'name',
    'slug',
    'max',
    'min',
    'startOn',
    'endOn',
    'createdAt',
    'updatedAt',
  ],
  fillable: [
    'categoryId',
    'typeId',
    'name',
    'slug',
    'max',
    'min',
    'startOn',
    'endOn',
  ],
});

export { Ads };
