import { auth } from '@modules/helper';

export abstract class LoginService {
  /**
   * Constructor.
   *
   * @param guard guard's name.
   */
  public constructor(private guard: string) {}

  /**
   * Valdaite credentials.
   *
   * @param credentials account's credentials.
   */
  public async validate(credentials: any) {
    return auth(this.guard).validate(credentials);
  }

  /**
   * Get new tokens.
   *
   * @param refreshToken refresh token.
   */
  public async refresh(refreshToken: string) {
    return auth(this.guard).refresh(refreshToken);
  }
}
