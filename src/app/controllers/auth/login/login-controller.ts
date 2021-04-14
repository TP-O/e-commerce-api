import { Request, Response } from 'express';
import { auth } from '@modules/helper';
import { authConfig } from '@configs/auth';
import { HttpRequestError } from 'app/exceptions/http-request-error';
import { loginValidator } from '@app/validators/auth/login/login-validator';

export abstract class LoginController {
  /**
   * Constructor.
   *
   * @param guard guard's name.
   */
  public constructor(protected guard: string) {}

  /**
   * Log in to the system.
   */
  public login = async (req: Request, res: Response) => {
    const value = await loginValidator.validate(req.body);

    // Check seller credentials
    const result = await auth(this.guard).validate(value);

    if (!result.success) {
      throw new HttpRequestError(400, result.error);
    }

    this.setTokens(res, result);

    res.status(200).json({
      success: true,
      message: 'Signed in successfully',
    });
  };

  /**
   * Log out of the system.
   */
  public logout = async (req: Request, res: Response) => {
    this.clearTokens(res);

    res.status(200).json({
      success: true,
      message: 'Signed out successfully',
    });
  };

  /**
   * Refresh access token
   */
  public refresh = async (req: Request, res: Response) => {
    const result = await auth('seller').refresh(req.cookies.refreshToken);

    if (!result.success) {
      throw new HttpRequestError(400, result.error);
    }

    this.setTokens(res, result);

    res.status(200).json({
      success: true,
      message: 'Access token was refreshed',
    });
  };

  /**
   * Save the access token and refresh token to cookie.
   *
   * @param token the tokens.
   */
  protected setTokens = (res: Response, token: any) => {
    res.cookie('accessToken', token.accessToken, {
      maxAge: authConfig.cookieExpriresIn,
      httpOnly: true,
    });

    res.cookie('refreshToken', token.refreshToken, {
      maxAge: authConfig.cookieExpriresIn,
      httpOnly: true,
    });
  };

  /**
   * Clear access token and refresh token.
   */
  protected clearTokens = (res: Response) => {
    res.cookie('accessToken', '', { maxAge: 0 });
    res.cookie('refreshToken', '', { maxAge: 0 });
  };
}
