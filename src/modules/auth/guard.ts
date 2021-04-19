import bcrypt from 'bcrypt';
import { JWT } from '@modules/auth/jwt';
import { authConfig } from '@configs/auth';

export class Guard {
  /**
   * Guard's name.
   */
  private _name = 'default';

  /**
   * Guard configuration.
   */
  private _config = authConfig.guard.default;

  /**
   *
   * @param name guard's name.
   */
  public switchTo(name: string) {
    if ((authConfig.guard as any)[name]) {
      this._name = name;
      this._config = (authConfig.guard as any)[name];
    } else {
      this._name = 'defaut';
      this._config = authConfig.guard.default;
    }
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
    const user = await this.findUserByEmail(credentials.email);

    if (!user || !this.checkPassword(credentials.password, user.password)) {
      return {
        success: false,
        error: 'Email or password is incorrect',
      };
    }

    const { accessToken, refreshToken } = JWT.create({
      sub: user.id,
      guard: this._name,
    });

    return {
      success: true,
      accessToken,
      refreshToken,
    };
  }

  private checkPassword(plainText: string, cipherText: string) {
    return bcrypt.compareSync(plainText, cipherText);
  }

  /**
   * Find the user.
   *
   * @param email user's email.
   */
  public async findUserByEmail(email: string) {
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
  public async findUserById(id: string) {
    const { data } = await this._config.model
      .select('*')
      .where([['id', '=', `v:${id}`]])
      .get();

    return data?.first();
  }
}
