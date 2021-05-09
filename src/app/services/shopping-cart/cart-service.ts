import { Cart } from '@app/models/shopping-cart/cart';
import { CartItem } from '@app/models/shopping-cart/cart-item';
import { autoInjectable } from 'tsyringe';
import { ProductService } from '@app/services/product/product-service';

@autoInjectable()
export class CartService {
  /**
   * Constructor.
   */
  public constructor(private _productService: ProductService) {}

  /**
   * Get cart of customer.
   *
   * @param customerId customer ID.
   */
  public async getCartOfCustomer(customerId: number) {
    const { data } = await Cart.select('*')
      .with('items')
      .where([['carts.customerId', '=', `v:${customerId}`]])
      .first();

    return data;
  }

  /**
   * Create cart for one customer.
   *
   * @param customerId customer ID.
   */
  public async createCart(customerId: number) {
    const { id } = await Cart.create([
      {
        customerId: customerId,
      },
    ]);

    return id;
  }

  /**
   * Create item in cart.
   *
   * @param cartId cart ID.
   * @param productId product ID.
   * @param quantity product quantity.
   */
  public async createCartItem(
    cartId: number,
    productId: number,
    quantity: number,
  ) {
    // Decrease product quantity
    if (
      !(await this._productService.updateQuantity(productId, quantity, false))
    ) {
      return false;
    }

    // Get current price of product
    const price = await this._productService.getCurrentPrice(
      productId,
      quantity,
    );

    const { success } = await CartItem.create([
      {
        cartId: cartId,
        productId: productId,
        quantity: quantity,
        price: price,
      },
    ]);

    return success;
  }

  /**
   * Update item quantity and price in cart.
   *
   * @param cartItemId cart item ID.
   * @param productId product ID.
   * @param quantity product quantity.
   */
  public async updateCartItem(
    cartItemId: number,
    productId: number,
    oldQuantity: number,
    newQuantity: number,
  ) {
    // Update product quantity
    if (
      !(await this._productService.updateQuantity(
        productId,
        oldQuantity - newQuantity,
      ))
    ) {
      return false;
    }

    // Get current price.
    const price = await this._productService.getCurrentPrice(
      productId,
      newQuantity,
    );

    const { success } = await CartItem.where([
      ['id', '=', `v:${cartItemId}`],
    ]).update({
      quantity: newQuantity,
      price: price,
    });

    return success;
  }

  /**
   * Add item to cart.
   *
   * @param customerId customer ID.
   * @param productId product ID.
   * @param quantity product quantity.
   */
  public async addToCart(
    customerId: number,
    productId: number,
    quantity: number,
  ) {
    let cart = await this.getCartOfCustomer(customerId);

    if (!cart) {
      // Create new cart
      await this.createCart(customerId);

      // Try to get cart again
      cart = await this.getCartOfCustomer(customerId);

      if (!cart) {
        return false;
      }
    }

    for (let i = 0; i < cart.items.length; i++) {
      // Update cart item
      if (cart.items[i].productId === productId) {
        return this.updateCartItem(
          cart.items[i].id,
          productId,
          cart.items[i].quantity,
          quantity,
        );
      }
    }

    // Add new cart item
    return this.createCartItem(cart.id, productId, quantity);
  }

  public async removeFromCart(customerId: number, productId: number) {
    const cart = await this.getCartOfCustomer(customerId);

    if (!cart) {
      return false;
    }

    for (let i = 0; i < cart.items.length; i++) {
      if (cart.items[i].productId === productId) {
        // Delete cart item and increase product quantity
        return (
          (await cart.items[i].delete()) &&
          (await this._productService.updateQuantity(
            productId,
            cart.items[i].quantity,
          ))
        );
      }
    }

    return false;
  }
}
