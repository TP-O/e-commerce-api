import bcrypt from 'bcrypt';
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
    const { success, error, payload } = JWT.verify(token);

    if (!success) {
      return { success, error };
    }

    this._userData = await this.findUserById(payload?.sub);

    return this._userData
      ? {
          success: true,
        }
      : {
          success: false,
          error: 'Invalid information',
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
    this._userData = await this.findUserByEmail(credentials.email);

    if (!this._userData || !this.checkPassword(credentials.password)) {
      return {
        success: false,
        error: 'Invalid credentials',
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

  private checkPassword(password: string) {
    return bcrypt.compareSync(password, this._userData.password);
  }

  /**
   * Find the user.
   *
   * @param email user's email.
   */
  private async findUserByEmail(email: string) {
    const { data } = await this._config.model
      .select('*')
      .where([['email', '=', `v:${email}`]])
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
      .select('*')
      .where([['id', '=', `v:${id}`]])
      .get();

    return data?.first();
  }
}
