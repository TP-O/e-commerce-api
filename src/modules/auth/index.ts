import { JWT } from '@modules/auth/jwt';
import { Guard } from '@modules/auth/guard';

export class Auth {
  /**
   * List of guards.
   */
  private static _guard = new Guard();

  /**
   * Select guard.
   *
   * @param name guard's name.
   */
  public static guard(name: string) {
    this._guard.switchTo(name);

    return this._guard;
  }

  /**
   * Verify access token.
   *
   * @param token access token.
   */
  public static async verify(token: string) {
    const { success, error, payload } = JWT.verify(token);

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
