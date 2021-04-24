import { model } from '@modules/helper';

export const ForgotPassword = model({
  table: 'forgot_passwords',
  // prettier-ignore
  columns: [
    'id',
    'account_id',
    'code',
    'type',
    'created_at',
    'updated_at',
  ],
  // prettier-ignore
  fillable: [
    'account_id',
    'code',
    'type',
  ],
  relationships: {},
});
