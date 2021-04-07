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
       * Admin authentication.
       */
      router.group(
        {
          prefix: '/admin',
          namespace: 'admin',
        },
        () => {
          router.post('/login', 'login-controller@login');
          router.post(
            '/logout',
            'login-controller@logout',
            ...['require-access-token'],
          );
          router.post(
            '/refresh',
            'login-controller@refresh',
            ...['require-refresh-token'],
          );
          router.post(
            '/register',
            'register-controller@register',
            ...['require-access-token', 'must-be-administrator'],
          );
        },
      );

      /**
       * Seller authentication.
       */
      router.group(
        {
          prefix: '/seller',
          namespace: 'seller',
        },
        () => {
          router.post('/login', 'login-controller@login');
          router.post(
            '/logout',
            'login-controller@logout',
            ...['require-access-token'],
          );
          router.post(
            '/refresh',
            'login-controller@refresh',
            ...['require-refresh-token'],
          );
          router.post('/register', 'register-controller@register');
        },
      );

      /**
       * User authentication.
       */
      router.group(
        {
          prefix: '/user',
          namespace: 'user',
        },
        () => {
          router.post('/login', 'login-controller@login');
          router.post(
            '/logout',
            'login-controller@logout',
            ...['require-access-token'],
          );
          router.post(
            '/refresh',
            'login-controller@refresh',
            ...['require-refresh-token'],
          );
          router.post('/register', 'register-controller@register');
        },
      );
    },
  );
}
