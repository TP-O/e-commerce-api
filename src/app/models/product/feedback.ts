import { model } from '@modules/helper';

const Feedback = model({
  table: 'feedbacks',
  // prettier-ignore
  columns: [
      'id',
      'customerId',
      'productId',
      'rating',
      'content',
      'createdAt',
      'updatedAt',
    ],
  // prettier-ignore
  fillable: [
      'customerId',
      'productId',
      'rating',
      'content',
    ],
});

export { Feedback };
