import { NextFunction, Request, Response } from 'express';
import { HttpRequestError } from '@app/exceptions/http-request-error';

export class MustHaveRole {
  public handle(roleNames = ['administrator']) {
    return async function (req: Request, res: Response, next: NextFunction) {
      try {
        console.log('hello');

        const { data } = await req.user?.get('role');
        const role = data?.first()?.role;

        if (roleNames.includes(role.name)) {
          return next();
        }
      } catch {
        throw new HttpRequestError(403, 'Do not have permission');
      }

      throw new HttpRequestError(403, 'Do not have permission');
    };
  }
}
