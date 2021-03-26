import { Request, Response } from 'express';
import UserService from 'service/user.service';
import { HttpRequestError } from 'exception/http-request-error';
import { format } from 'helper';
import { creatingValidator } from 'validator/user/create.user';
import { updatingValidator } from 'validator/user/update.user';

class UserController {
  private readonly userSerivce = UserService;

  /**
   * Get list of users.
   */
  public all = async (_: Request, res: Response) => {
    const { data } = await this.userSerivce.findAll();

    return res.status(200).json({
      data: format(data?.all()),
    });
  };

  /**
   * Get user by id.
   */
  public index = async (req: Request, res: Response) => {
    const { data } = await this.userSerivce.findOne(req.params.id);

    return res.status(200).json({
      data: format(data),
    });
  };

  /**
   * Store new user.
   */
  public create = async (req: Request, res: Response) => {
    const value = await creatingValidator.validate(req.body);

    const { success } = await this.userSerivce.create(value);

    if (!success) {
      throw new HttpRequestError(500, 'Can not create user');
    }

    return res.status(201).json({ success });
  };

  /**
   * Update user.
   */
  public update = async (req: Request, res: Response) => {
    const value = await updatingValidator.validate(req.body);

    const { success } = await this.userSerivce.update(req.params.id, value);

    if (!success) {
      throw new HttpRequestError(500, 'Can not update user');
    }

    return res.status(201).json({ success });
  };

  /**
   * Delete user.
   */
  public delete = async (req: Request, res: Response) => {
    const { success } = await this.userSerivce.delete(req.params.id);

    if (!success) {
      throw new HttpRequestError(500, 'Can not delete user');
    }

    return res.status(201).json({ success });
  };
}

export default new UserController();
