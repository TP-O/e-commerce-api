import { model } from '@modules/helper';

const AdsType = model({
  table: 'advertisement_types',
  // prettier-ignore
  columns: [
        'id',
        'name',
        'createdAt',
        'updatedAt',
    ],
  // prettier-ignore
  fillable: [
        'name'
    ],
});

export { AdsType };
