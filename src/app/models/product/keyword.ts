import { model } from '@modules/helper';

const Keyword = model({
  table: 'keywords',
  // prettier-ignore
  columns: [
    'id',
    'word',
    'score',
    'createdAt',
    'updatedAt',
  ],
  // prettier-ignore
  fillable: [
    'word',
    'score',
  ],
});

export { Keyword };
