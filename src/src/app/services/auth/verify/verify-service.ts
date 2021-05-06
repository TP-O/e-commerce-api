import { Activation } from '@app/models/auth/activation';
import { Model } from '@modules/database/core/orm/model';

export abstract class VerifyService {
  /**
   * Constructor.
   *
   * @param account account model.
   * @param type activation type.
   */
  public constructor(protected account: Model, protected type: string) {}

  /**
   * Find an activation code.
   *
   * @param code activation code.
   */
  public async findActivation(code: string) {
    const { data } = await Activation.select('*')
      .where([
        ['code', '=', `v:${code}`],
        ['accountType', '=', `v:${this.type}`],
      ])
      .get();

    return data?.first();
  }

  /**
   * Delete an activation code.
   *
   * @param code activation code.
   */
  public async deleteActivation(code: string) {
    const { success } = await Activation.where([
      ['code', '=', `v:${code}`],
      ['accountType', '=', `v:${this.type}`],
    ]).delete();

    return success ?? false;
  }

  /**
   * Activate the account.
   *
   * @param accountId account's ID.
   */
  public async activateAccount(accountId: number) {
    const { data } = await this.account
      .select('*')
      .where([['id', '=', `v:${accountId}`]])
      .get();

    if (!data?.first()) {
      return false;
    }

    (data?.first()).active = 1;

    const { success } = await data?.first().save();

    return success ?? false;
  }
}
