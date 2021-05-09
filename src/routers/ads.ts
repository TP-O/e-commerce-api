import { LRouter } from 'laravel-expressjs-router';
import { container } from 'tsyringe';
import { AdsController } from '@app/controllers/ads/ads-controller';

export function useAdsRoutes(router: LRouter) {
  /**
   * Ads
   */
  router.group({ prefix: '/ads' }, () => {
    router.post({
      path: '/create-ads-strategy',
      action: container.resolve(AdsController).createAdsStrategy,
    });

    router.post({
      path: '/insert-product',
      action: container.resolve(AdsController).insertProductToAds,
    });

    router.delete({
      path: '/delete-product',
      action: container.resolve(AdsController).deleteProductToAds,
    });

    router.get({
      path: '/get-ads',
      action: container.resolve(AdsController).getAdsById,
    });

    router.get({
      path: '/get-products',
      action: container.resolve(AdsController).getProductsOfAds,
    });

    router.get({
      path: '/get-products-of-seller',
      action: container.resolve(AdsController).getProductsOfSelller,
    });

    // router.group({ prefix: '/login' }, () => {
    //   router.post({
    //     path: '/admin',
    //     action: container.resolve(Auth.AdminLoginController).login,
    //   });
    //   router.post({
    //     path: '/seller',
    //     action: container.resolve(Auth.SellerLoginController).login,
    //   });
    //   router.post({
    //     path: '/customer',
    //     action: container.resolve(Auth.CustomerLoginController).login,
    //   });
    // });

    // /**
    //  * Logout routes.
    //  */
    // router.group({ prefix: '/logout' }, () => {
    //   router.post({
    //     path: '/admin',
    //     action: container.resolve(Auth.AdminLoginController).logout,
    //   });
    //   router.post({
    //     path: '/seller',
    //     action: container.resolve(Auth.SellerLoginController).logout,
    //   });
    //   router.post({
    //     path: '/customer',
    //     action: container.resolve(Auth.CustomerLoginController).logout,
    //   });
    // });
  });
}
