import { NextFunction, Request, Response } from 'express';
import { HttpRequestError } from '@app/exceptions/http-request-error';
import { injectable } from 'tsyringe';

@injectable()
export class RequireRefreshToken {
  public handle() {
    return function (req: Request, res: Response, next: NextFunction) {
      if (!req.cookies.refreshToken) {
        throw new HttpRequestError(400, 'Refresh token is missing');
      }

      next();
    };
  }
}
