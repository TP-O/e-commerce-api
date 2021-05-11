import { CategoryController } from '@app/controllers/product/category-controller';
import { LRouter } from 'laravel-expressjs-router';
import { container } from 'tsyringe';

export function useCategoryRoutes(router: LRouter) {
  /**
   * Product routes.
   */
  router.group({ prefix: '/categories' }, () => {
    router.get({
      path: '/:level',
      action: container.resolve(CategoryController).get,
    });

    router.get({
      path: '/:left/:right',
      action: container.resolve(CategoryController).getByLeftRight,
    });
  });
}
