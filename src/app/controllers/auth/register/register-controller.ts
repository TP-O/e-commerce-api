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
  protected create = async (account: any) => {
    const success = await this.registerService.registerAccount(account);

    if (!success) {
      throw new HttpRequestError(500, 'Account creation failed');
    }
  };

  /**
   * Grant permissions for account.
   *
   * @param email account's email.
   * @param role role's name.
   */
  protected assign = async (email: string, roleName: string) => {
    const account = await this.findAccountByEmail(email);
    const role = await this.findRoleByName(roleName);

    // assign the role to the account.
    const success = await this.registerService.assign(account.id, role.id);

    if (!success) {
      throw new HttpRequestError(500, 'Authorization failed');
    }

    return account.id;
  };

  /**
   * Find role by name.
   *
   * @param name role's name.
   */
  protected findRoleByName = async (name: string) => {
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
  protected findAccountByEmail = async (email: string) => {
    const account = await this.registerService.findAccountByEmail(email);

    if (!account) {
      throw new HttpRequestError(404, 'Account not found');
    }

    return account;
  };

  /**
   * Create an activation code for account.
   *
   * @param accountId ID's account.
   * @param type type of account.
   */
  protected createActivationCode = async (accountId: number, type: string) => {
    const code = await this.registerService.createActivationCode(
      accountId,
      type,
    );

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
  protected sendEmail = (email: string, content: string) => {
    this.registerService.sendEmail(email, content);
  };

  /**
   * Register an account.
   */
  public abstract register(req: Request, res: Response): Promise<void>;

  /**
   * Resend activation email.
   */
  public abstract resendEmail(req: Request, res: Response): Promise<void>;
}
