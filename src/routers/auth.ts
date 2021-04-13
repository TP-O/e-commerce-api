import { LRouter } from 'laravel-expressjs-router';

export function useAuthRouter(router: LRouter) {
  /**
   * Authentications.
   */
  router.group(
    {
      prefix: '/auth',
      namespace: 'auth',
    },
    () => {
      /**
       * Login routes.
       */
      router.group(
        {
          prefix: '/login',
          namespace: 'login',
        },
        () => {
          router.post('/admin', 'admin-login-controller@login');
          router.post('/seller', 'seller-login-controller@login');
          router.post('/user', 'user-login-controller@login');
        },
      );

      /**
       * Logout routes.
       */
      router.group(
        {
          prefix: '/logout',
          namespace: 'login',
        },
        () => {
          router.post('/admin', 'admin-login-controller@logout');
          router.post('/seller', 'seller-login-controller@logout');
          router.post('/user', 'user-login-controller@logout');
        },
      );

      /**
       * Refresh token routes.
       */
      router.group(
        {
          prefix: '/refresh',
          namespace: 'login',
        },
        () => {
          router.post('/admin', 'admin-login-controller@refresh');
          router.post('/seller', 'seller-login-controller@refresh');
          router.post('/user', 'user-login-controller@refresh');
        },
      );

      /**
       * Registration routes.
       */
      router.group(
        {
          prefix: '/register',
          namespace: 'registration',
        },
        () => {
          router.post('/admin', 'admin-registration-controller@register');
          router.post('/seller', 'seller-registration-controller@register');
          router.post('/user', 'user-registration-controller@register');
        },
      );

      /**
       * Verification routes.
       */
      router.group(
        {
          prefix: '/verify',
          namespace: 'verification',
        },
        () => {
          router.post('/admin/:code', 'admin-verification-controller@verify');
          router.post('/seller/:code', 'seller-verification-controller@verify');
          router.post('/user/:code', 'user-verification-controller@verify');
        },
      );
    },
  );
}
