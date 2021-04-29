import { Request, Response } from 'express';
import { HttpRequestError } from '@app/exceptions/http-request-error';
import { Validator } from '@app/validators';
import { RegisterService } from '@app/services/auth/register/register-service';

export abstract class RegisterController {
  /**
   * Constructor.
   *
   * @param registerValidator registration validator.
   * @param registerService registration service.
   */
  public constructor(
    protected registerValidator: Validator,
    protected registerService: RegisterService,
  ) {}

  /**
   * Create the account.
   *
   * @param account account's information.
   */
  public create = async (account: any) => {
    const id = await this.registerService.registerAccount(account);

    if (!id) {
      throw new HttpRequestError(500, 'Account creation failed');
    }

    return id;
  };

  /**
   * Find role by name.
   *
   * @param name role's name.
   */
  public findRoleByName = async (name: string) => {
    const role = await this.registerService.findRoleByName(name);

    if (!role) {
      throw new HttpRequestError(404, 'Role not found');
    }

    return role;
  };

  /**
   * Find the account by email.
   *
   * @param email account's email.
   */
  public findAccountByEmail = async (email: string) => {
    const account = await this.registerService.findAccountByEmail(email);

    if (!account) {
      throw new HttpRequestError(404, 'Account not found');
    }

    return account;
  };

  /**
   * Create the activation code for account.
   *
   * @param accountId ID's account.
   * @param type type of account.
   */
  public createActivationCode = async (accountId: number) => {
    const code = await this.registerService.createActivationCode(accountId);

    if (code === '') {
      throw new HttpRequestError(500, 'Unable to send activation email');
    }

    return code;
  };

  /**
   * Send mail to account's email address.
   *
   * @param email account's email.
   * @param content email's content.
   */
  public sendEmail = (email: string, content: string) => {
    this.registerService.sendEmail(email, content);
  };

  /**
   * Resend the activation email.
   */
  public resendEmail = async (req: Request, res: Response) => {
    if (!req.user?.email) {
      throw new HttpRequestError(500, 'Missing email address');
    }

    // Check the account is exists
    await this.findAccountByEmail(req.user.email);

    const code = await this.createActivationCode(req.user.id);

    this.sendEmail(req.user.email, code);

    return res.status(200).json({
      success: true,
      message: 'Activation email has been sent',
    });
  };

  /**
   * Register the account.
   */
  public abstract register(req: Request, res: Response): Promise<Response>;
}
