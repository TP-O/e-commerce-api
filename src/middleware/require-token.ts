import { NextFunction, Request, Response } from 'express';
import { auth } from '@helper';
import { HttpRequestError } from '@exception/http-request-error';

class RequireToken {
  public async handle(req: Request, res: Response, next: NextFunction) {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
      throw new HttpRequestError(403, 'Require access token');
    }

    const { success, error } = await auth().verify(accessToken);

    if (!success) {
      throw new HttpRequestError(400, error);
    }

    next();
  }
}

export default new RequireToken();
