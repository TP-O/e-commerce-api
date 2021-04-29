import { HttpRequestError } from '@app/exceptions/http-request-error';
import { ForgotPasswordService } from '@app/services/auth/password/forgot-password-service';
import { Validator } from '@app/validators';
import { Request, Response } from 'express';

export abstract class ForgotPasswordController {
  /**
   * Constructor.
   *
   * @param forgotPasswordService forgot password service.
   * @param forgotPasswordValidator forgot password validator.
   * @param resetPasswordValidator reset password validator.
   */
  public constructor(
    protected forgotPasswordService: ForgotPasswordService,
    protected forgotPasswordValidator: Validator,
    protected resetPasswordValidator: Validator,
  ) {}

  /**
   * Find the account by something...
   *
   * @param field field's name.
   * @param value field's value.
   */
  public async findAccountBy(field: string, value: any) {
    const account = await this.forgotPasswordService.findAccountBy(
      field,
      value,
    );

    if (!account) {
      throw new HttpRequestError(404, 'Account is unavailable');
    }

    return account;
  }

  /**
   * Find the forgot password code.
   *
   * @param code forgot password code.
   */
  public async findForgotPassword(code: string) {
    const forgotPassword = await this.forgotPasswordService.findForgotPassword(
      code,
    );

    if (!forgotPassword) {
      throw new HttpRequestError(404, 'Not found');
    }

    return forgotPassword;
  }

  /**
   * Create the forgot password code for the account.
   *
   * @param accountId ID's account.
   */
  public async createForgotPassword(accountId: number) {
    const code = await this.forgotPasswordService.createForgotPassword(
      accountId,
    );

    if (code === '') {
      throw new HttpRequestError(500, 'Unable to change password');
    }

    return code;
  }

  /**
   * Delete the forgot password code.
   *
   * @param code forgot password code.
   */
  public async deleteForgotPassword(code: string) {
    const success = await this.forgotPasswordService.deleteForgotPassword(code);

    if (!success) {
      throw new HttpRequestError(500, 'Unable to delete forgot password code');
    }

    return success;
  }

  /**
   * Change password of the account.
   *
   * @param accountId account's ID.
   * @param password new password.
   */
  public async changeAccountPassword(accountId: number, password: string) {
    const success = await this.forgotPasswordService.changeAccountPassword(
      accountId,
      password,
    );

    if (!success) {
      throw new HttpRequestError(500, 'Unable to update your password');
    }

    return success;
  }

  /**
   * Send mail to account's email address.
   *
   * @param email account's email.
   * @param content email's content.
   */
  public sendEmail(email: string, content: string) {
    this.forgotPasswordService.sendEmail(email, content);
  }

  /**
   * Send reset password link to account's email.
   */
  public forgotPassword = async (req: Request, res: Response) => {
    // Validate input
    const input = await this.forgotPasswordValidator.validate(req.body);

    // Find account by email
    const account = await this.findAccountBy('email', input.email);

    // Create forgot password code
    const code = await this.createForgotPassword(account.id);

    // Send the password reset link to the email
    this.sendEmail(input.email, code);

    return res.status(200).json({
      success: true,
      message: 'Password reset link has been sent to your email',
    });
  };

  /**
   * Reset account's password.
   */
  public resetPassword = async (req: Request, res: Response) => {
    // Check forgot password code exists
    const forgotPassword = await this.findForgotPassword(req.params.code);

    // Validate input
    const input = await this.resetPasswordValidator.validate(req.body);

    // Update account's password
    await this.changeAccountPassword(forgotPassword.accountId, input.password);

    // Delete forgot password code
    await this.deleteForgotPassword(req.params.code);

    return res.status(200).json({
      success: true,
      message: 'Password has been reset',
    });
  };
}
