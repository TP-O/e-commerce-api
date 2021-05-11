import { LRouter } from 'laravel-expressjs-router';
import { container } from 'tsyringe';
import * as Middleware from '@app/middleware';
import { AdsController } from '@app/controllers/ads/ads-controller';

export function useAdsRoutes(router: LRouter) {
  /**
   * Ads routes.
   */
  router.group({ prefix: '/ads' }, () => {
    router.get({
      path: '/discounting-products',
      action: container.resolve(AdsController).getDiscountingProduct,
    });
    router.get({
      path: '/all-ads',
      action: container.resolve(AdsController).getAdsByType,
    });
    router.get({
      path: '/:id',
      action: container.resolve(AdsController).getAdsById,
    });

    router.get({
      path: '/:id/products',
      action: container.resolve(AdsController).getProductsOfAds,
    });

    router.group(
      {
        middleware: [container.resolve(Middleware.RequireAccessToken).handle()],
      },
      () => {
        router.post({
          path: '/',
          action: container.resolve(AdsController).createAdsStrategy,
          middleware: [
            container
              .resolve(Middleware.MustHaveRole)
              .handle(['administrator']),
          ],
        });

        router.group(
          {
            middleware: [
              container
                .resolve(Middleware.MustHaveRole)
                .handle(['individual', 'company']),
            ],
          },
          () => {
            router.get({
              path: '/:id/recommended-products',
              action: container.resolve(AdsController).getProductsOfSelller,
            });

            router.post({
              path: '/:id/products',
              action: container.resolve(AdsController).insertProductToAds,
            });

            router.delete({
              path: '/:id/products/:productId',
              action: container.resolve(AdsController).deleteProductToAds,
            });
          },
        );
      },
    );
  });
}
