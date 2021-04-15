import bcrypt from 'bcrypt';
import mailer from '@modules/mailer';
import randomstring from 'randomstring';
import { ForgotPassword } from '@app/models/auth/forgot-password';
import { Model } from '@modules/database/core/orm/model';

export abstract class ForgotPasswordService {
  /**
   * Constructor.
   *
   * @param model related model.
   * @param type account type.
   */
  public constructor(protected model: Model, protected type: string) {}

  /**
   * Find the account by something...
   *
   * @param field field's name.
   * @param value field's value.
   */
  public async findAccountBy(field: string, value: any) {
    const { data } = await this.model
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
        ['type', '=', `v:${this.type}`],
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
        account_id: accountId,
        code: code,
        type: this.type,
      },
    ]);

    return success ? code : '';
  }

  /**
   * Delete an forgot password information.
   *
   * @param code forgot password code.
   */
  public async deleteForgotPassword(code: string) {
    const { success } = await ForgotPassword.where([
      ['code', '=', `v:${code}`],
      ['type', '=', `v:${this.type}`],
    ]).delete();

    return success ?? false;
  }

  /**
   * Reset password of the account.
   *
   * @param accountId account's ID.
   * @param password new password.
   */
  public async resetAccountPassword(accountId: number, password: string) {
    const { success } = await this.model
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
    mailer.send({
      to: email,
      subject: 'Click this link to update your password',
      text: content,
    });
  }
}
