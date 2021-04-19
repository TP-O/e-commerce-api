import { NextFunction, Request, Response } from 'express';
import { HttpRequestError } from '@app/exceptions/http-request-error';
import { injectable } from 'tsyringe';

@injectable()
export class RequireInactiveAccount {
  public handle() {
    return function (req: Request, res: Response, next: NextFunction) {
      if (req.user?.active) {
        throw new HttpRequestError(400, 'Your account has been activated');
      }

      next();
    };
  }
}
