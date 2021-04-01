import jwt from 'jsonwebtoken';
import { authConfig } from '@config/auth.config';

class JsonWebToken {
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
      const payload = jwt.verify(token, authConfig.jwtSecret) as Record<string, any>;

      if (payload.type !== 'access_token') {
        return {
          success: false,
          message: 'Invaliad access token',
        };
      }

      return {
        success: true,
        payload: payload,
      };
    } catch (err) {
      return {
        success: false,
        message: err.message,
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
        any
      >;

      if (payload.type !== 'refresh_token') {
        return {
          success: false,
          message: 'Invaliad refresh token',
        };
      }

      const newRefreshToken = this.createRefreshToken(payload);
      // Modify payload for new access token
      payload.type = 'access_token';
      const newAccessToken = this.create(payload);

      return {
        success: true,
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      };
    } catch (err) {
      return {
        success: false,
        message: err.message,
      };
    }
  }
}

export const JWT = new JsonWebToken();
