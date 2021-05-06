import { model } from '@modules/helper';
const AdsSeller = model({
    table: 'advertisement_strategies_sellers',
    columns: [
        'id',
        'strategyId',
        'sellerId',
        'createdAt',
        'UpdatedAt'
    ],
    fillable: [
        'strategyId',
        'sellerId',
    ]
});

export { AdsSeller };