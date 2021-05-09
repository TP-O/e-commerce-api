import { HttpRequestError } from '@app/exceptions/http-request-error';
import { OrderService } from '@app/services/order/order-service';
import { format } from '@modules/helper';
import { Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class OrderController {
  /**
   * Constructor.
   *
   * @param _orderService order service.
   */
  public constructor(private _orderService: OrderService) {}

  /**
   * Get all orders.
   */
  public getOrder = async (req: Request, res: Response) => {
    const data = await this._orderService.getOrderItems(req.user.id);

    if (!data) {
      throw new HttpRequestError(500, 'Can not get orders');
    }

    return res.status(200).json({
      success: true,
      data: format(data),
    });
  };

  /**
   * Create order for customer.
   */
  public createOrder = async (req: Request, res: Response) => {
    const success = await this._orderService.createOrder(
      req.user.id,
      req.body.addressId,
    );

    if (!success) {
      throw new HttpRequestError(500, 'Can not create order');
    }

    return res.status(201).json({
      success: true,
      message: 'Create order successfully',
    });
  };

  /**
   * Update order status.
   */
  public updateStatus = async (req: Request, res: Response) => {
    const success = await this._orderService.updateStatus(
      req.body.orderItemId,
      req.body.statusId,
    );

    if (!success) {
      throw new HttpRequestError(500, 'Can not update status for order item');
    }

    return res.status(201).json({
      success: true,
      message: 'Update status successfully',
    });
  };
}
