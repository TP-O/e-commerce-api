import { model } from '@modules/helper';
const AdsSeller = model({
  table: 'advertisement_strategies_sellers',
  // prettier-ignore
  columns: [
        'id',
        'strategyId',
        'sellerId',
        'createdAt',
        'UpdatedAt'
    ],
  // prettier-ignore
  fillable: [
        'strategyId',
        'sellerId',
    ],
});

export { AdsSeller };
