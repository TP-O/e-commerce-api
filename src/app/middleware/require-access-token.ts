import { NextFunction, Request, Response } from 'express';
import { HttpRequestError } from '@app/exceptions/http-request-error';
import { Auth } from '@modules/auth';

class RequireAccessToken {
  public async handle(req: Request, res: Response, next: NextFunction) {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
      throw new HttpRequestError(403, 'access token is missing');
    }

    const { success, error, user } = await Auth.verify(accessToken);

    if (!success) {
      throw new HttpRequestError(400, error);
    }

    req.user = user;

    next();
  }
}

export default new RequireAccessToken();
