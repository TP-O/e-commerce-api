import { LRouter } from 'laravel-expressjs-router';
import { container } from 'tsyringe';

export function useCartRoutes(router: LRouter) {
  /**
   * Shopping-Cart
   */
  router.group({ prefix: '/cart' }, () => {
    /**
     * Cart Modification
     */
    router.get({
      path: '/add',
      action: container.resolve,
    });
    router.get({
      path: '/reduce',
      action: container.resolve,
    });
    router.get({
      path: '/remove',
      action: container.resolve,
    });
    router.get({
      path: '/checkout',
      action: container.resolve,
    });
  });
}
