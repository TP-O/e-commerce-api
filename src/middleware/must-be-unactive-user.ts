import { NextFunction, Request, Response } from 'express';
import { auth } from '@helper';
import { HttpRequestError } from '@exception/http-request-error';

class MustBeAdministrator {
  public async handle(req: Request, res: Response, next: NextFunction) {
    if (auth().user().active) {
      throw new HttpRequestError(403, 'Not allowed');
    }

    next();
  }
}

export default new MustBeAdministrator();
