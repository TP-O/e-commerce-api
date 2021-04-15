import { HttpRequestError } from '@app/exceptions/http-request-error';
import { ForgotPasswordService } from '@app/services/auth/password/forgot-password-service';
import { forgotPasswordValidator } from '@app/validators/auth/password/forgot-password-validator';
import { resetPasswordValidator } from '@app/validators/auth/password/reset-password-validator';
import { Request, Response } from 'express';

export abstract class ForgotPasswordController {
  /**
   * Constructor.
   *
   * @param service forgot password service.
   */
  protected constructor(protected service: ForgotPasswordService) {}

  /**
   * Find the account by something...
   *
   * @param field field's name.
   * @param value field's value.
   */
  protected async findAccountBy(field: string, value: any) {
    const account = await this.service.findAccountBy(field, value);

    if (!account) {
      throw new HttpRequestError(404, 'Email is unavailable');
    }

    return account;
  }

  /**
   * Find an forgot password information.
   *
   * @param code forgot password code.
   */
  protected async findForgotPassword(code: string) {
    const forgotPassword = await this.service.findForgotPassword(code);

    if (!forgotPassword) {
      throw new HttpRequestError(404, 'Not found');
    }

    return forgotPassword;
  }

  /**
   * Create an forgot password code for account.
   *
   * @param accountId ID's account.
   */
  protected async createForgotPassword(accountId: number) {
    const code = await this.service.createForgotPassword(accountId);

    if (code === '') {
      throw new HttpRequestError(500, 'Unable to change password');
    }

    return code;
  }

  /**
   * Delete an forgot password information.
   *
   * @param code forgot password code.
   */
  protected async deleteForgotPassword(code: string) {
    const success = await this.service.deleteForgotPassword(code);

    if (!success) {
      throw new HttpRequestError(500, 'Unable to delete forgot password code');
    }
  }

  /**
   * Reset password of the account.
   *
   * @param accountId account's ID.
   * @param password new password.
   */
  protected async resetAccountPassword(accountId: number, password: string) {
    const success = await this.service.resetAccountPassword(
      accountId,
      password,
    );

    if (!success) {
      throw new HttpRequestError(500, 'Unable to update your password');
    }
  }

  /**
   * Send mail to account's email address.
   *
   * @param email account's email.
   * @param content email's content.
   */
  protected sendEmail(email: string, content: string) {
    this.service.sendEmail(email, content);
  }

  /**
   * Send reset password link to account's email.
   */
  public forgotPassword = async (req: Request, res: Response) => {
    // Validate input
    const input = await forgotPasswordValidator.validate(req.body);

    // Find account by email
    const account = await this.findAccountBy('email', input.email);

    // Create forgot password code
    const code = await this.createForgotPassword(account.id);

    // Send the password reset link to the email
    this.sendEmail(input.email, code);

    res.status(200).json({
      success: true,
      message: 'Password reset link has been sent to your email',
    });
  };

  public resetPassword = async (req: Request, res: Response) => {
    // Check forgot password code exists
    const forgotPassword = await this.findForgotPassword(req.params.code);

    // Validate input
    const input = await resetPasswordValidator.validate(req.body);

    // Update account's password
    await this.resetAccountPassword(forgotPassword.account_id, input.password);

    // Delete forgot password code
    await this.deleteForgotPassword(req.params.code);

    res.status(200).json({
      success: true,
      message: 'Password has been reset',
    });
  };
}
