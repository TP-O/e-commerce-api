import { NextFunction, Request, Response } from 'express';
import { HttpRequestError } from '@app/exceptions/http-request-error';
import { verify } from '@modules/helper';

export class RequireAccessToken {
  public handle() {
    return async function (req: Request, res: Response, next: NextFunction) {
      const accessToken = req.cookies.accessToken;

      if (!accessToken) {
        throw new HttpRequestError(400, 'Access token is missing');
      }

      const { success, error, user } = await verify(accessToken);

      if (!success) {
        throw new HttpRequestError(400, error);
      }

      req.user = user;

      next();
    };
  }
}
