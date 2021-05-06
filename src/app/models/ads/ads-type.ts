import { model } from '@modules/helper';

const AdsType = model({
    table: 'advertisement_types',
    columns: [
        'id',
        'name',
        'createdAt',
        'updatedAt',
    ],
    fillable: [
        'name'
    ],
});

export{ AdsType };