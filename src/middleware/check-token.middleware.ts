import { Auth } from '@auth';
import { HttpRequestError } from '@exception/http-request-error';
import { NextFunction, Request, Response } from 'express';

class CheckTokenMiddleware {
  public async handle(req: Request, res: Response, next: NextFunction) {
    if (!req.cookies.access_token) {
      throw new HttpRequestError(401, 'Access token is required');
    }

    const { success, message } = await Auth.guard(req.params.guard).verify(
      req.cookies.access_token,
    );

    if (!success) {
      throw new HttpRequestError(401, message);
    }

    next();
  }
}

export default new CheckTokenMiddleware();
