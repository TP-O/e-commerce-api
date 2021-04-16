import { LRouter } from 'laravel-expressjs-router';
import * as Auth from '@app/controllers/auth';
import { container } from 'tsyringe';

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
          router.post(
            '/admin',
            container.resolve(Auth.AdminLoginController).login,
          );
          router.post(
            '/seller',
            container.resolve(Auth.SellerLoginController).login,
          );
          router.post(
            '/user',
            container.resolve(Auth.UserLoginController).login,
          );
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
          router.post(
            '/admin',
            container.resolve(Auth.AdminLoginController).logout,
          );
          router.post(
            '/seller',
            container.resolve(Auth.SellerLoginController).logout,
          );
          router.post(
            '/user',
            container.resolve(Auth.UserLoginController).logout,
          );
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
          router.post(
            '/admin',
            container.resolve(Auth.AdminLoginController).refresh,
          );
          router.post(
            '/seller',
            container.resolve(Auth.SellerLoginController).refresh,
          );
          router.post(
            '/user',
            container.resolve(Auth.UserLoginController).refresh,
          );
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
            container.resolve(Auth.AdminRegisterController).register,
            'require-access-token',
            'must-be-administrator',
          );
          router.post(
            '/seller',
            container.resolve(Auth.SellerRegisterController).register,
          );
          router.post(
            '/user',
            container.resolve(Auth.UserRegisterController).register,
          );
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
            container.resolve(Auth.AdminRegisterController).resendEmail,
            'require-access-token',
            'require-inactive-account',
          );
          router.post(
            '/seller',
            container.resolve(Auth.SellerRegisterController).resendEmail,
            'require-access-token',
            'require-inactive-account',
          );
          router.post(
            '/user',
            container.resolve(Auth.UserRegisterController).resendEmail,
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
          router.post(
            '/admin/:code',
            container.resolve(Auth.AdminVerifyController).verify,
          );
          router.post(
            '/seller/:code',
            container.resolve(Auth.SellerVerifyController).verify,
          );
          router.post(
            '/user/:code',
            container.resolve(Auth.UserVerifyController).verify,
          );
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
            container.resolve(Auth.AdminForgotPasswordController)
              .forgotPassword,
          );
          router.post(
            '/seller',
            container.resolve(Auth.SellerForgotPasswordController)
              .forgotPassword,
          );
          router.post(
            '/user',
            container.resolve(Auth.UserForgotPasswordController).forgotPassword,
          );
        });

        /**
         * Reset password routes.
         */
        router.group({ prefix: '/reset-password' }, () => {
          router.post(
            '/admin/:code',
            container.resolve(Auth.AdminForgotPasswordController)
              .forgotPassword,
          );
          router.post(
            '/seller/:code',
            container.resolve(Auth.SellerForgotPasswordController)
              .forgotPassword,
          );
          router.post(
            '/user/:code',
            container.resolve(Auth.UserForgotPasswordController).forgotPassword,
          );
        });
      });
    },
  );
}
