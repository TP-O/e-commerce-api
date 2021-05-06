import { Order } from '@app/models/shopping-cart/order';
import { OrderItem } from '@app/models/shopping-cart/order-item';
import { autoInjectable } from 'tsyringe';
import { CartService } from '@app/services/shopping-cart/cart-service';

@autoInjectable()
export class OrderService {
  /**
   * Constructor.
   */
  public constructor(private _cartService: CartService) {}

  /**
   * Create order items.
   */
  public async createOrderItems(
    orderId: number,
    cartId: number,
    addressId: number,
  ) {
    const data: any[] = [];
    const cartItems = await this._cartService.getCartItems(cartId);

    for (let i = 0; i < cartItems.length; i++) {
      data.push({
        orderId: orderId,
        addressId: addressId,
        productId: cartItems[i].productId,
        price: cartItems[i].price,
        quantity: cartItems[i].quantity,
      });
    }

    const { success } = await OrderItem.create(data);

    return success;
  }

  /**
   * Update order status.
   */
  public async updateOrderItemStatus(id: number, statusId: number) {
    const { success } = await OrderItem.where([['id', '=', `v:${id}`]]).update({
      statusId,
    });

    return success;
  }

  /**
   * Create order.
   */
  public async createOrder(customerId: number, addressId: number) {
    const cart = await this._cartService.getCartOfCustomer(customerId);

    if (cart.items.length == 0) {
      return false;
    }

    const { id } = await Order.create([{ customerId: customerId }]);

    if (id === undefined) {
      return false;
    }

    const success = await this.createOrderItems(id, cart.id, addressId);

    return success;
  }
}
