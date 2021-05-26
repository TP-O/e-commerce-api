import { Order } from '@app/models/order/order';
import { OrderItem } from '@app/models/order/order-item';
import { autoInjectable } from 'tsyringe';
import { CartService } from '@app/services/shopping-cart/cart-service';

@autoInjectable()
export class OrderService {
  /**
   * Constructor.
   *
   * @param _cartService cart service.
   */
  public constructor(private _cartService: CartService) {}

  /**
   * Create order.
   *
   * @param customerId customer ID.
   * @param addressId address ID.
   */
  public async createOrder(customerId: number, addressId: number) {
    // Get cart of customer
    const cart = await this._cartService.getCartOfCustomer(customerId);

    // Skip if cart is empty
    if (!cart || cart.items.length == 0) {
      return false;
    }

    // Create order
    const { id } = await Order.create([{ customerId: customerId }]);

    if (id === undefined) {
      return false;
    }

    // Create order items
    const itemId = await this.createOrderItems(id, addressId, cart.items);

    return itemId;
  }

  /**
   * Get order items.
   *
   * @param customerId customer ID.
   */
  public async getOrderItems(customerId: number) {
    const { data } = await Order.select('*')
      .addSelection(
        'products.name:items-productName',
        'products.slug:items-productSlug',
        'order_status.name:items-status',
      )
      .with('items.address')
      .join('products')
      .on([['order_items.productId', '=', 'products.id']])
      .join('order_status')
      .on([['order_items.statusId', '=', 'order_status.id']])
      .where([['orders.customerId', '=', `${customerId}`]])
      .get();

    return data?.all();
  }

  /**
   * Create order items.
   *
   * @param orderId order ID.
   * @param addressId address ID,
   * @param cartItems list of cart items.
   */
  public async createOrderItems(
    orderId: number,
    addressId: number,
    cartItems: any[],
  ) {
    const orderItems = cartItems.map((item) => ({
      orderId: orderId,
      addressId: addressId,
      productId: item.productId,
      price: item.price,
      quantity: item.quantity,
    }));

    console.log(orderItems);

    const { success } = await OrderItem.create(orderItems);

    const deletedCartItems = await this._cartService.deleteCartItems(
      cartItems.map((item) => item.id),
    );

    return success && deletedCartItems;
  }

  /**
   * Update order item status.
   */
  public async updateStatus(id: number, statusId: number) {
    const { success } = await OrderItem.where([['id', '=', `${id}`]]).update({
      statusId,
    });

    return success;
  }
}
