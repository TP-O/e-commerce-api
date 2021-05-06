import { model } from '@modules/helper';

const AdsProduct = model({
  table: 'advertisement_strategies_products',
  // prettier-ignore
  columns: [
    'id',
    'strategyId',
    'productId',
    'percent',
    'amount',
    'createdAt',
    'updatedAt',
  ],
  // prettier-ignore
  fillable: [
    'strategyId',
    'productId',
    'percent',
    'amount',
  ],
});

export { AdsProduct };
