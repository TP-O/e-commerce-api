import { Request, Response } from 'express';
import AdminService from '@service/admin.service';
import { format } from '@helper';
import { HttpRequestError } from '@exception/http-request-error';
import { CreatingValidator } from '@validator/admin/create.validator';
import { UpdatingValidator } from '@validator/admin/update.validator';

class AdminController {
  private readonly adminSerivce = AdminService;

  /**
   * Get list of admins.
   */
  public all = async (_: Request, res: Response) => {
    const { data } = await this.adminSerivce.findAll();

    return res.status(200).json({
      data: format(data?.all()),
    });
  };

  /**
   * Get admin by id.
   */
  public index = async (req: Request, res: Response) => {
    const { data } = await this.adminSerivce.findOne(req.params.id);

    return res.status(200).json({
      data: format(data),
    });
  };

  /**
   * Store new admin.
   */
  public create = async (req: Request, res: Response) => {
    const value = await CreatingValidator.validate(req.body);

    const { success } = await this.adminSerivce.create(value);

    if (!success) {
      throw new HttpRequestError(500, 'Can not create admin');
    }

    return res.status(201).json({ success });
  };

  /**
   * Update admin.
   */
  public update = async (req: Request, res: Response) => {
    const value = await UpdatingValidator.validate(req.body);

    const { success } = await this.adminSerivce.update(req.params.id, value);

    if (!success) {
      throw new HttpRequestError(500, 'Can not update admin');
    }

    return res.status(201).json({ success });
  };

  /**
   * Delete admin.
   */
  public delete = async (req: Request, res: Response) => {
    const { success } = await this.adminSerivce.delete(req.params.id);

    if (!success) {
      throw new HttpRequestError(500, 'Can not delete admin');
    }

    return res.status(201).json({ success });
  };
}

export default new AdminController();
