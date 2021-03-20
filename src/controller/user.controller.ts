import { Request, Response } from 'express';
import UserService from '@service/user.service';
import { HttpRequestError } from '@exception/http-request-error';

class UserContrller {
  private readonly userSerivce = UserService;

  public index = (req: Request, res: Response) => {
    const user = this.userSerivce.find(req.params.id);

    if (user) {
      return res.status(200).json({
        data: user,
      });
    }

    throw new HttpRequestError(404, 'User not found');
  };

  public all = (_: Request, res: Response) => {
    return res.status(200).json({
      data: this.userSerivce.findAll(),
    });
  };
}

export default new UserContrller();
