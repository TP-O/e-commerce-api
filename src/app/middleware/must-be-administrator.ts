import { NextFunction, Request, Response } from 'express';
import { HttpRequestError } from '@app/exceptions/http-request-error';
import { injectable } from 'tsyringe';

@injectable()
export class MustBeAdministrator {
  public handle() {
    return async function (req: Request, res: Response, next: NextFunction) {
      try {
        const { data } = await req.user.get('roles');
        const roles = data?.first()?.roles;

        for (const role of roles) {
          if (role.name === 'administrator') {
            return next();
          }
        }
      } catch {
        throw new HttpRequestError(403, 'Do not have permission');
      }

      throw new HttpRequestError(403, 'Do not have permission');
    };
  }
}
