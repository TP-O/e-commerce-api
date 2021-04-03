import { Request, Response } from 'express';
import SalesmanService from '@service/salesman.service';
import { format } from '@helper';
import { HttpRequestError } from '@exception/http-request-error';
import { CreatingValidator } from '@validator/salesman/create.validator';
import { UpdatingValidator } from '@validator/salesman/update.validator';

class SalesmanController {
  private readonly salesmanService = SalesmanService;

  /**
   * Get list of salesmans.
   */
  public all = async (_: Request, res: Response) => {
    const { data } = await this.salesmanService.findAll();

    return res.status(200).json({
      data: format(data?.all()),
    });
  };

  /**
   * Get salesman by id.
   */
  public index = async (req: Request, res: Response) => {
    const { data } = await this.salesmanService.findOne(req.params.id);

    return res.status(200).json({
      data: format(data),
    });
  };

  /**
   * Store new salesman.
   */
  public create = async (req: Request, res: Response) => {
    const value = await CreatingValidator.validate(req.body);

    const { success } = await this.salesmanService.create(value);

    if (!success) {
      throw new HttpRequestError(500, 'Can not create salesman');
    }

    return res.status(201).json({ success });
  };

  /**
   * Update salesman.
   */
  public update = async (req: Request, res: Response) => {
    const value = await UpdatingValidator.validate(req.body);

    const { success } = await this.salesmanService.update(req.params.id, value);

    if (!success) {
      throw new HttpRequestError(500, 'Can not update salesman');
    }

    return res.status(201).json({ success });
  };

  /**
   * Delete salesman.
   */
  public delete = async (req: Request, res: Response) => {
    const { success } = await this.salesmanService.delete(req.params.id);

    if (!success) {
      throw new HttpRequestError(500, 'Can not delete salesman');
    }

    return res.status(201).json({ success });
  };
}

export default new SalesmanController();
