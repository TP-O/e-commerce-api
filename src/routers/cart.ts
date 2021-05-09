import { CartController } from '@app/controllers/shopping-cart/cart-controller';
import * as Middleware from '@app/middleware';
import { LRouter } from 'laravel-expressjs-router';
import { container } from 'tsyringe';

export function useCartRoutes(router: LRouter) {
  /**
   * Cart routes.
   */
  router.group(
    {
      prefix: '/cart',
      middleware: [
        container.resolve(Middleware.RequireAccessToken).handle(),
        container
          .resolve(Middleware.MustHaveRole)
          .handle(['normal customer', 'VIP customer']),
      ],
    },
    () => {
      router.get({
        path: '/',
        action: container.resolve(CartController).getCart,
      });
      router.post({
        path: '/add',
        action: container.resolve(CartController).addToCart,
      });
      router.delete({
        path: '/remove',
        action: container.resolve(CartController).removeFromCart,
      });
    },
  );
}
