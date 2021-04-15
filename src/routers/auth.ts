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
          middleware: ['require-refresh-token'],
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
          namespace: 'register',
        },
        () => {
          router.post(
            '/admin',
            'admin-register-controller@register',
            'require-access-token',
            'must-be-administrator',
          );
          router.post('/seller', 'seller-register-controller@register');
          router.post('/user', 'user-register-controller@register');
        },
      );

      /**
       * Send activation email
       */
      router.group(
        {
          prefix: '/active',
          namespace: 'register',
        },
        () => {
          router.post(
            '/admin',
            'admin-register-controller@resendEmail',
            'require-access-token',
            'require-inactive-account',
          );
          router.post(
            '/seller',
            'seller-register-controller@resendEmail',
            'require-access-token',
            'require-inactive-account',
          );
          router.post(
            '/user',
            'user-register-controller@resendEmail',
            'require-access-token',
            'require-inactive-account',
          );
        },
      );

      /**
       * Verification routes.
       */
      router.group(
        {
          prefix: '/verify',
          namespace: 'verify',
        },
        () => {
          router.post('/admin/:code', 'admin-verify-controller@verify');
          router.post('/seller/:code', 'seller-verify-controller@verify');
          router.post('/user/:code', 'user-verify-controller@verify');
        },
      );

      /**
       * Forgot password routes.
       */
      router.group({ namespace: 'password' }, () => {
        /**
         * Request reset password routes.
         */
        router.group({ prefix: '/forgot-password' }, () => {
          router.post(
            '/admin',
            'admin-forgot-password-controller@forgotPassword',
          );
          router.post(
            '/seller',
            'seller-forgot-password-controller@forgotPassword',
          );
          router.post(
            '/user',
            'user-forgot-password-controller@forgotPassword',
          );
        });

        /**
         * Reset password routes.
         */
        router.group({ prefix: '/reset-password' }, () => {
          router.post(
            '/admin/:code',
            'admin-forgot-password-controller@resetPassword',
          );
          router.post(
            '/seller/:code',
            'seller-forgot-password-controller@resetPassword',
          );
          router.post(
            '/user/:code',
            'user-forgot-password-controller@resetPassword',
          );
        });
      });
    },
  );
}
