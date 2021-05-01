import { model } from '@modules/helper';

export const ForgotPassword = model({
  table: 'forgot_passwords',
  // prettier-ignore
  columns: [
    'id',
    'accountId',
    'code',
    'accountType',
    'createdAt',
    'updatedAt',
  ],
  // prettier-ignore
  fillable: [
    'accountId',
    'code',
    'accountType',
  ],
});
