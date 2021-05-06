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
   */
  public async getCartOfCustomer(customerId: number) {
    const { data } = await Cart.select('*')
      .with('items')
      .where([['carts.customerId', '=', `v:${customerId}`]])
      .get();

    return data?.first();
  }

  /**
   * Create cart.
   */
  public async createCart(customerId: number) {
    const { success } = await Cart.create([
      {
        customerId: customerId,
      },
    ]);

    return success;
  }

  /**
   * Get cart item.
   */
  public async getCartItem(id: number) {
    const { data } = await CartItem.select('*')
      .where([['id', '=', `v:${id}`]])
      .get();

    return data?.first();
  }

  /**
   * Get all cart items.
   */
  public async getCartItems(cartId: number) {
    const { data } = await Cart.select('id')
      .with('items')
      .where([['carts.id', '=', `v:${cartId}`]])
      .get();

    return data?.first().items;
  }

  /**
   * Create item in cart.
   */
  public async createCartItem(
    cartId: number,
    productId: number,
    quantity: number,
  ) {
    const price = await this._productService.getProductPrice(productId);

    const { success } = await CartItem.create([
      {
        cartId: cartId,
        productId: productId,
        quantity: quantity,
        price: price * quantity,
      },
    ]);

    return success;
  }

  /**
   * Update item quantity and price in cart.
   */
  public async updateCartItem(
    cartItemId: number,
    productId: number,
    quantity: number,
  ) {
    const price = await this._productService.getProductPrice(productId);

    const { success } = await CartItem.where([
      ['id', '=', `v:${cartItemId}`],
    ]).update({
      quantity: quantity,
      price: price * quantity,
    });

    return success;
  }

  /**
   * Delete cart items.
   *
   * @param ids list of cart item ids.
   */
  public async deleteCartItems(ids: number[]) {
    Cart.where((q) => {
      ids.forEach((id) => q.orWhere([['id', '=', `v:${id}`]]));
    });

    const { success } = await Cart.delete();

    return success;
  }

  /**
   * Add item to cart.
   */
  public async addProductToCart(
    cartId: number,
    productId: number,
    quantity: number,
  ) {
    const cartItems = await this.getCartItems(cartId);

    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].productId === productId)
        return this.updateCartItem(cartItems[i].id, productId, quantity);
    }

    return this.createCartItem(cartId, productId, quantity);
  }
}
