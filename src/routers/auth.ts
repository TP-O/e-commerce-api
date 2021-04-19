import { LRouter } from 'laravel-expressjs-router';
import * as Auth from '@app/controllers/auth';
import * as Middleware from '@app/middleware';
import { container } from 'tsyringe';

export function useAuthRoutes(router: LRouter) {
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
          router.post({
            path: '/admin',
            action: container.resolve(Auth.AdminLoginController).login,
          });
          router.post({
            path: '/seller',
            action: container.resolve(Auth.SellerLoginController).login,
          });
          router.post({
            path: '/user',
            action: container.resolve(Auth.UserLoginController).login,
          });
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
          router.post({
            path: '/admin',
            action: container.resolve(Auth.AdminLoginController).logout,
          });
          router.post({
            path: '/seller',
            action: container.resolve(Auth.SellerLoginController).logout,
          });
          router.post({
            path: '/user',
            action: container.resolve(Auth.UserLoginController).logout,
          });
        },
      );

      /**
       * Refresh token routes.
       */
      router.group(
        {
          prefix: '/refresh',
          namespace: 'login',
          middleware: [
            container.resolve(Middleware.RequireRefreshToken).handle(),
          ],
        },
        () => {
          router.post({
            path: '/admin',
            action: container.resolve(Auth.AdminLoginController).refresh,
          });
          router.post({
            path: '/seller',
            action: container.resolve(Auth.SellerLoginController).refresh,
          });
          router.post({
            path: '/user',
            action: container.resolve(Auth.UserLoginController).refresh,
          });
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
          router.post({
            path: '/admin',
            action: container.resolve(Auth.AdminRegisterController).register,
            middleware: [
              container.resolve(Middleware.RequireAccessToken).handle(),
              container
                .resolve(Middleware.MustHaveRole)
                .handle('administrator'),
            ],
          });
          router.post({
            path: '/seller',
            action: container.resolve(Auth.SellerRegisterController).register,
          });
          router.post({
            path: '/user',
            action: container.resolve(Auth.UserRegisterController).register,
          });
        },
      );

      /**
       * Send activation email
       */
      router.group(
        {
          prefix: '/active',
          namespace: 'register',
          middleware: [
            container.resolve(Middleware.RequireAccessToken).handle(),
            container.resolve(Middleware.RequireInactiveAccount).handle(),
          ],
        },
        () => {
          router.post({
            path: '/admin',
            action: container.resolve(Auth.AdminRegisterController).resendEmail,
          });
          router.post({
            path: '/seller',
            action: container.resolve(Auth.SellerRegisterController)
              .resendEmail,
          });
          router.post({
            path: '/user',
            action: container.resolve(Auth.UserRegisterController).resendEmail,
          });
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
          router.post({
            path: '/admin/:code',
            action: container.resolve(Auth.AdminVerifyController).verify,
          });
          router.post({
            path: '/seller/:code',
            action: container.resolve(Auth.SellerVerifyController).verify,
          });
          router.post({
            path: '/user/:code',
            action: container.resolve(Auth.UserVerifyController).verify,
          });
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
          router.post({
            path: '/admin',
            action: container.resolve(Auth.AdminForgotPasswordController)
              .forgotPassword,
          });
          router.post({
            path: '/seller',
            action: container.resolve(Auth.SellerForgotPasswordController)
              .forgotPassword,
          });
          router.post({
            path: '/user',
            action: container.resolve(Auth.UserForgotPasswordController)
              .forgotPassword,
          });
        });

        /**
         * Reset password routes.
         */
        router.group({ prefix: '/reset-password' }, () => {
          router.post({
            path: '/admin/:code',
            action: container.resolve(Auth.AdminForgotPasswordController)
              .forgotPassword,
          });
          router.post({
            path: '/seller/:code',
            action: container.resolve(Auth.SellerForgotPasswordController)
              .forgotPassword,
          });
          router.post({
            path: '/user/:code',
            action: container.resolve(Auth.UserForgotPasswordController)
              .forgotPassword,
          });
        });
      });
    },
  );
}
