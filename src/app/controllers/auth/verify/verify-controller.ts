import { HttpRequestError } from '@app/exceptions/http-request-error';
import { VerifyService } from '@app/services/auth/verify/verify-service';
import { Request, Response } from 'express';

export abstract class VerifyController {
  /**
   * Constructor.
   *
   * @param verifyService verification service.
   */
  public constructor(protected verifyService: VerifyService) {}

  /**
   * Find an activation information.
   *
   * @param code activation code.
   */
  protected findActivation = async (code: string) => {
    const activation = await this.verifyService.findActivation(code);

    if (!activation) {
      throw new HttpRequestError(404, 'Not found');
    }

    return activation;
  };

  /**
   * Delete an activation information.
   *
   * @param code activation code.
   */
  protected deleteActivation = async (code: string) => {
    const success = await this.verifyService.deleteActivation(code);

    if (!success) {
      throw new HttpRequestError(500, 'Unable to delete activaion');
    }
  };

  /**
   * Activate the account.
   *
   * @param accountId account's ID.
   */
  protected activateAccount = async (accountId: number) => {
    const success = await this.verifyService.activateAccount(accountId);

    if (!success) {
      throw new HttpRequestError(500, 'Unable to activate account');
    }
  };

  /**
   * Verify the account.
   */
  public verify = async (req: Request, res: Response) => {
    const activation = await this.findActivation(req.params.code);

    await this.activateAccount(activation.account_id);

    await this.deleteActivation(req.params.code);

    res.status(200).json({
      success: true,
    });
  };
}
