import { Request, Response } from 'express';
import { authConfig } from '@configs/auth';
import { HttpRequestError } from '@app/exceptions/http-request-error';
import { Validator } from '@app/validators';
import { LoginService } from '@app/services/auth/login/login-service';

export abstract class LoginController {
  /**
   * Constructor.
   *
   * @param loginService login service.
   * @param loginValidator login validator.
   */
  public constructor(
    protected loginService: LoginService,
    protected loginValidator: Validator,
  ) {}

  /**
   * Log in to the system.
   */
  public login = async (req: Request, res: Response) => {
    const value = await this.loginValidator.validate(req.body);

    // Check credentials
    const result = await this.loginService.validate(value);

    if (!result.success) {
      throw new HttpRequestError(400, result.error);
    }

    this.setTokens(res, result);

    return res.status(200).json({
      success: true,
      message: 'Signed in successfully',
    });
  };

  /**
   * Log out of the system.
   */
  public logout = async (req: Request, res: Response) => {
    this.clearTokens(res);

    return res.status(200).json({
      success: true,
      message: 'Signed out successfully',
    });
  };

  /**
   * Refresh the access token.
   */
  public refresh = async (req: Request, res: Response) => {
    const result = await this.loginService.refresh(req.cookies.refreshToken);

    if (!result.success) {
      throw new HttpRequestError(400, result.error);
    }

    this.setTokens(res, result);

    return res.status(200).json({
      success: true,
      message: 'Access token was refreshed',
    });
  };

  /**
   * Save the access token and refresh token to the cookie.
   *
   * @param token the tokens.
   */
  public setTokens = (res: Response, token: any) => {
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
   * Clear the access token and refresh token.
   */
  public clearTokens = (res: Response) => {
    res.cookie('accessToken', '', { maxAge: 0 });
    res.cookie('refreshToken', '', { maxAge: 0 });
  };
}
