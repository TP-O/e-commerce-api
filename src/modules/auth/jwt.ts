import jwt from 'jsonwebtoken';
import { authConfig } from '@configs/auth';
import { singleton } from 'tsyringe';

@singleton()
export class JsonWebToken {
  /**
   *
   * @param payload
   */
  public create(payload: Record<string, string>) {
    const token = jwt.sign(
      {
        ...payload,
        type: 'access_token',
      },
      authConfig.jwtSecret,
      {
        expiresIn: authConfig.accessTokenExpiresIn,
      },
    );

    return {
      accessToken: token,
      refreshToken: this.createRefreshToken(payload),
    };
  }

  /**
   *
   * @param payload
   */
  public createRefreshToken(payload: Record<string, string>) {
    return jwt.sign(
      {
        ...payload,
        type: 'refresh_token',
      },
      authConfig.jwtSecret,
      {
        expiresIn: authConfig.refreshTokenExpiresIn,
      },
    );
  }

  /**
   *
   * @param token
   */
  public verify(token: string) {
    try {
      const payload = jwt.verify(token, authConfig.jwtSecret) as Record<
        string,
        any
      >;

      if (payload.type !== 'access_token') {
        return {
          success: false,
          error: 'Type of token is incorrect',
        };
      }

      return {
        success: true,
        payload: payload,
      };
    } catch {
      return {
        success: false,
        error: 'Verification failed',
      };
    }
  }

  /**
   *
   * @param refreshToken
   */
  public refresh(refreshToken: string) {
    try {
      const payload = jwt.verify(refreshToken, authConfig.jwtSecret) as Record<
        string,
        string
      >;

      if (payload.type !== 'refresh_token') {
        return {
          success: false,
          error: 'Type of token is incorrect',
        };
      }

      const token = this.create(this.getData(payload));

      return {
        success: true,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
      };
    } catch {
      return {
        success: false,
        error: 'Verification failed',
      };
    }
  }

  /**
   * Get the data in payload.
   *
   * @param payload jwt payload.
   */
  private getData(payload: Record<string, string>) {
    delete payload.iat;
    delete payload.exp;

    return payload;
  }
}
