import { NextFunction, Request, Response } from 'express';
import { HttpRequestError } from '@app/exceptions/http-request-error';

class MustBeAdministrator {
  public async handle(req: Request, res: Response, next: NextFunction) {
    if (req.user.active) {
      throw new HttpRequestError(400, 'Your account has been activated');
    }

    next();
  }
}

export default new MustBeAdministrator();
