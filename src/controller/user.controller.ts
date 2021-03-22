import { Request, Response } from 'express';
import { Controller } from '@controller/common.controller';
import UserService from '@service/user.service';
import { HttpRequestError } from '@exception/http-request-error';

class UserContrller extends Controller {
  private readonly userSerivce = UserService;

  public all = async (_: Request, res: Response) => {
    const { data } = await this.userSerivce.findAll();

    return res.status(200).json({
      data: this.format(data?.all()),
    });
  };

  public index = async (req: Request, res: Response) => {
    const { data } = await this.userSerivce.findOne(req.params.id);

    return res.status(200).json({
      data: this.format(data),
    });
  };

  public create = async (req: Request, res: Response) => {
    const { success } = await this.userSerivce.create(req.body);

    if (!success) {
      throw new HttpRequestError(500, 'Can not create user');
    }

    return res.status(201).json({ success });
  };

  public update = async (req: Request, res: Response) => {
    const { success } = await this.userSerivce.update(
      req.params.id,
      req.body,
    );

    if (!success) {
      throw new HttpRequestError(500, 'Can not update user');
    }

    return res.status(201).json({ success });
  };

  public delete = async (req: Request, res: Response) => {
    const { success } = await this.userSerivce.delete(req.params.id);

    if (!success) {
      throw new HttpRequestError(500, 'Can not delete user');
    }

    return res.status(201).json({ success });
  };
}

export default new UserContrller();
