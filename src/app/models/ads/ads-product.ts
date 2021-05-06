import { model } from '@modules/helper';

const AdsProduct = model({
    table: 'advertisement_strategies_products',
    columns: [
        'id',
        'strategyId',
        'productId',
        'percent',
        'amount',
        'createdAt',
        'updatedAt'
    ],
    fillable: [
        'strategyId',
        'productId',
        'percent',
        'amount'
    ],
});

export { AdsProduct };