import { model } from '@modules/helper';

const Ads = model({
  table: 'advertisement_strategies',
  // prettier-ignore
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
  // prettier-ignore
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
