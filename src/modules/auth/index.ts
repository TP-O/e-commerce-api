import { Guard } from '@modules/auth/guard';
import { singleton } from 'tsyringe';

@singleton()
export class Auth {
  /**
   * Constructor.
   *
   * @param _guard guard.
   */
  public constructor(private _guard: Guard) {}

  /**
   * Select guard.
   *
   * @param name guard's name.
   */
  public guard(name: string) {
    this._guard.switchTo(name);

    return this._guard;
  }

  /**
   * Verify access token.
   *
   * @param token access token.
   */
  public async verify(token: string) {
    const { success, error, payload } = this._guard.jwt.verify(token);

    if (!success) {
      return { success, error };
    }

    this._guard.switchTo(payload?.guard);

    const user = await this._guard.findUserById(payload?.sub);

    return user
      ? { success, user }
      : { success: false, message: 'Invalid access token' };
  }
}
