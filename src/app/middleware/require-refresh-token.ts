import { NextFunction, Request, Response } from 'express';
import { HttpRequestError } from '@app/exceptions/http-request-error';

class RequireRefreshToken {
  public async handle(req: Request, res: Response, next: NextFunction) {
    if (!req.cookies.refreshToken) {
      throw new HttpRequestError(400, 'Refresh token is missing');
    }

    next();
  }
}

export default new RequireRefreshToken();
