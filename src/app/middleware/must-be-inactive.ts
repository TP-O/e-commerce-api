import { NextFunction, Request, Response } from 'express';
import { HttpRequestError } from '@app/exceptions/http-request-error';

class MustBeInactive {
  public async handle(req: Request, res: Response, next: NextFunction) {
    if (req.user.active) {
      throw new HttpRequestError(404, 'Not found');
    }

    next();
  }
}

export default new MustBeInactive();
