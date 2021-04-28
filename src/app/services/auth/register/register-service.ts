import randomstring from 'randomstring';
import { Model } from '@modules/database/core/orm/model';
import { Activation } from '@app/models/auth/activation';
import { sender } from '@modules/helper';

export abstract class RegisterService {
  /**
   * Constructor.
   *
   * @param account account model.
   * @param role role model.
   * @param type account type.
   */
  public constructor(
    protected account: Model,
    protected role: Model,
    protected type: string,
  ) {}

  /**
   * Register an account.
   *
   * @param value account's information.
   */
  public async registerAccount(value: any) {
    const { success, id } = await this.account.create([value]);

    return success ? id : 0;
  }

  /**
   * Find role by name.
   *
   * @param name role's name.
   */
  public async findRoleByName(name: string) {
    const { data } = await this.role
      .select('id')
      .where([['name', '=', `v:${name}`]])
      .get();

    return data?.first();
  }

  /**
   * Find the account by email.
   *
   * @param email account's email.
   */
  public async findAccountByEmail(email: string) {
    const { data } = await this.account
      .select('id')
      .where([['email', '=', `v:${email}`]])
      .get();

    return data?.first();
  }

  /**
   * Create an activation code for the account.
   *
   * @param accountId ID's account.
   * @param type type of account.
   */
  public async createActivationCode(accountId: number) {
    const code = randomstring.generate({ length: 25 });

    const { success } = await Activation.create([
      {
        accountId: accountId,
        code: code,
        accountType: this.type,
      },
    ]);

    return success ? code : '';
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
      subject: 'Click this link to activate your account',
      text: content,
    });
  }
}
