import { NextFunction, Request, Response } from 'express';
import { HttpRequestError } from '@app/exceptions/http-request-error';

class MustBeAdministrator {
  public async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { data } = await req.user.get('roles');
      const roles = data?.first()?.roles;

      for (const role of roles) {
        if (role.name === 'administrator') {
          return next();
        }
      }
    } catch {
      throw new HttpRequestError(403, 'do not have permission');
    }
  }
}

export default new MustBeAdministrator();
