import { HttpRequestError } from '@app/exceptions/http-request-error';
import { CartService } from '@app/services/shopping-cart/cart-service';
import { format } from '@modules/helper';
import { Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class CartController {
  /**
   * Constructor.
   *
   * @param _cartService cart service.
   */
  public constructor(private _cartService: CartService) {}

  /**
   * Get cart.
   */
  public getCart = async (req: Request, res: Response) => {
    const data = await this._cartService.getCartOfCustomer(req.user.id);

    if (!data) {
      throw new HttpRequestError(404, 'Cart not found');
    }

    return res.status(200).json({
      success: true,
      data: format(data),
    });
  };

  /**
   * Add product to cart.
   */
  public addToCart = async (req: Request, res: Response) => {
    const success = await this._cartService.addToCart(
      req.user.id,
      req.body.productId,
      req.body.quantity,
    );

    if (!success) {
      throw new HttpRequestError(500, 'Can not add product to cart');
    }

    return res.status(201).json({
      success: true,
      message: 'Product added',
    });
  };

  /**
   * Remove product from cart.
   */
  public removeFromCart = async (req: Request, res: Response) => {
    const success = await this._cartService.removeFromCart(
      req.user.id,
      req.body.productId,
    );

    if (!success) {
      throw new HttpRequestError(404, 'Cart item not found');
    }

    return res.status(201).json({
      success: true,
      message: 'Product deleted',
    });
  };
}
