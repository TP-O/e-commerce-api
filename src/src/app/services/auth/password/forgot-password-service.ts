import bcrypt from 'bcryptjs';
import randomstring from 'randomstring';
import { ForgotPassword } from '@app/models/auth/forgot-password';
import { Model } from '@modules/database/core/orm/model';
import { sender } from '@modules/helper';

export abstract class ForgotPasswordService {
  /**
   * Constructor.
   *
   * @param account account model.
   * @param type account type.
   */
  public constructor(protected account: Model, protected type: string) {}

  /**
   * Find the account by something...
   *
   * @param field field's name.
   * @param value field's value.
   */
  public async findAccountBy(field: string, value: any) {
    const { data } = await this.account
      .select('*')
      .where([[field, '=', `v:${value}`]])
      .get();

    return data?.first();
  }

  /**
   * Find an forgot password information.
   *
   * @param code forgot password code.
   */
  public async findForgotPassword(code: string) {
    const { data } = await ForgotPassword.select('*')
      .where([
        ['code', '=', `v:${code}`],
        ['accountType', '=', `v:${this.type}`],
      ])
      .get();

    return data?.first();
  }

  /**
   * Create an forgot password code for account.
   *
   * @param accountId ID's account.
   */
  public async createForgotPassword(accountId: number) {
    const code = randomstring.generate({ length: 25 });
    const { success } = await ForgotPassword.create([
      {
        accountId: accountId,
        code: code,
        accountType: this.type,
      },
    ]);

    return success ? code : '';
  }

  /**
   * Delete a forgot password code.
   *
   * @param code forgot password code.
   */
  public async deleteForgotPassword(code: string) {
    const { success } = await ForgotPassword.where([
      ['code', '=', `v:${code}`],
      ['accountType', '=', `v:${this.type}`],
    ]).delete();

    return success ?? false;
  }

  /**
   * Change password of the account.
   *
   * @param accountId account's ID.
   * @param password new password.
   */
  public async changeAccountPassword(accountId: number, password: string) {
    const { success } = await this.account
      .where([['id', '=', `v:${accountId}`]])
      .update({ password: bcrypt.hashSync(password, 10) });

    return success ?? false;
  }

  /**
   * Send mail to account's email address.
   *
   * @param email account's email.
   * @param content email's content.
   */
  public sendEmail(email: string, content: string) {
    sender({
      to: email,
      subject: 'Click this link to update your password',
      text: content,
    });
  }
}
