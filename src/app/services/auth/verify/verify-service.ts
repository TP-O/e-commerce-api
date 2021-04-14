import { Activation } from '@app/models/auth/activation';
import { Model } from '@modules/database/core/orm/model';

export abstract class VerifyService {
  /**
   * Constructor.
   *
   * @param model related model.
   * @param type activation type.
   */
  public constructor(protected model: Model, protected type: string) {}

  /**
   * Find an activation information.
   *
   * @param code activation code.
   */
  public async findActivation(code: string) {
    const { data } = await Activation.select('*')
      .where([
        ['code', '=', `v:${code}`],
        ['type', '=', `v:${this.type}`],
      ])
      .get();

    return data?.first();
  }

  /**
   * Delete an activation information.
   *
   * @param code activation code.
   */
  public async deleteActivation(code: string) {
    const { success } = await Activation.where([
      ['code', '=', `v:${code}`],
      ['type', '=', `v:${this.type}`],
    ]).delete();

    return success ?? false;
  }

  /**
   * Activate the account.
   *
   * @param accountId account's ID.
   */
  public async activateAccount(accountId: number) {
    const { data } = await this.model
      .select('*')
      .where([['id', '=', `v:${accountId}`]])
      .get();

    (data?.first()).active = 1;

    const { success } = await data?.first().save();

    return success ?? false;
  }
}
