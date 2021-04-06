import { NextFunction, Request, Response } from 'express';
import { auth } from '@helper';
import { HttpRequestError } from '@exception/http-request-error';

class MustBeAdministrator {
  public async handle(req: Request, res: Response, next: NextFunction) {
    const { data } = await auth().user().get('roles');
    const roles = data?.first()?.roles;

    for (const role of roles) {
      if (role.name === 'Administrator') {
        return next();
      }
    }

    throw new HttpRequestError(403, 'Not allowed');
  }
}

export default new MustBeAdministrator();
