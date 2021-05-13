import { LRouter } from 'laravel-expressjs-router';
import * as Middleware from '@app/middleware';
import { container } from 'tsyringe';
import { ProductController } from '@app/controllers/product/product-controller';

export function useProductRoutes(router: LRouter) {
  /**
   * Product routes.
   */
  router.group({ prefix: '/products' }, () => {
    router.get({
      path: '/',
      action: container.resolve(ProductController).all,
    });

    router.get({
      path: '/:slug',
      action: container.resolve(ProductController).get,
    });

    router.get({
      path: '/filter/with',
      action: container.resolve(ProductController).filter,
    });

    router.get({
      path: '/:id/feedbacks',
      action: container.resolve(ProductController).getFeedbacks,
    });

    router.group(
      {
        middleware: [
          container.resolve(Middleware.RequireAccessToken).handle(),
          container
            .resolve(Middleware.MustHaveRole)
            .handle(['individual', 'company']),
        ],
      },
      () => {
        router.post({
          path: '/',
          action: container.resolve(ProductController).create,
        });

        router.put({
          path: '/:id',
          action: container.resolve(ProductController).update,
        });

        router.delete({
          path: '/:id',
          action: container.resolve(ProductController).delete,
        });
      },
    );
  });
}
