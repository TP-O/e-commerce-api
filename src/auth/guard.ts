import { JWT } from '@auth/jwt';
import { authConfig } from '@config/auth.config';
import { Model } from '@database/core/orm/model';

export class Guard {
  /**
   * Guard configuration.
   */
  private _config: {
    model: Model;
  };

  /**
   * Current authenticated user.
   */
  private _userData: any;

  /**
   *
   * @param name guard's name.
   */
  public constructor(private _name = 'default') {
    this._config = (authConfig.guard as any)[_name]
      ? (authConfig.guard as any)[_name]
      : authConfig.guard['default'];
  }

  /**
   * Determine if the current user is authenticated.
   */
  public check(): boolean {
    return this._userData ? true : false;
  }

  /**
   * Determine if the current user is a guest.
   */
  public guest(): boolean {
    return this._userData ? false : true;
  }

  /**
   * Get the current authenticated user.
   */
  public user(): any {
    return this._userData;
  }

  /**
   * Get the ID of the current autheticated user.
   */
  public id(): number | undefined {
    return this._userData.id;
  }

  /**
   * Verify access token.
   *
   * @param token access token.
   */
  public async verify(token: string) {
    const { success, message, payload } = JWT.verify(token);

    if (!success) {
      return { success, message };
    }

    this._userData = await this.findUserById(payload?.sub);

    return this._userData
      ? {
          success: true,
        }
      : {
          success: false,
          message: 'Invalid information',
        };
  }

  /**
   * Refresh access token.
   *
   * @param refreshToken refresh token.
   */
  public async refresh(refreshToken: string) {
    return JWT.refresh(refreshToken);
  }

  /**
   * Validate a user's credentials.
   *
   * @param credentials login information.
   */
  public async validate(credentials: { email: string; password: string }) {
    this._userData = await this.findUser(credentials);

    if (!this._userData) {
      return {
        success: false,
        message: 'Invalid credentials',
      };
    }

    const { accessToken, refreshToken } = JWT.create({
      sub: this._userData.id,
      guard: this._name,
    });

    return {
      success: true,
      accessToken,
      refreshToken,
    };
  }

  /**
   * Find the user.
   *
   * @param credentials login information.
   */
  private async findUser(credentials: { email: string; password: string }) {
    const { data } = await this._config.model
      .select('id')
      .where([
        ['email', '=', `v:${credentials.email}`],
        ['password', '=', `v:${credentials.password}`],
      ])
      .get();

    return data?.first();
  }

  /**
   * Find the user by ID.
   *
   * @param credentials login information.
   */
  private async findUserById(id: string) {
    const { data } = await this._config.model
      .select('id')
      .where([['id', '=', `v:${id}`]])
      .get();

    return data?.first();
  }
}
