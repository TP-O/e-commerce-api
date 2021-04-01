import { Guard } from '@auth/guard';

export class Auth {
  /**
   * List of guards.
   */
  private static _guards: { [key: string]: Guard } = {};

  /**
   * Select guard.
   *
   * @param name guard's name.
   */
  public static guard(name = 'default') {
    if (!this._guards[name]) {
      this._guards[name] = new Guard(name);
    }

    return this._guards[name];
  }
}
