import { LRouter } from 'laravel-expressjs-router';
import * as Auth from '@app/controllers/auth';
import * as Middleware from '@app/middleware';
import { container } from 'tsyringe';

export function useAuthRoutes(router: LRouter) {
  /**
   * Authentications.
   */
  router.group({ prefix: '/auth' }, () => {
    /**
     * Login routes.
     */
    router.group({ prefix: '/login' }, () => {
      router.post({
        path: '/admin',
        action: container.resolve(Auth.AdminLoginController).login,
      });
      router.post({
        path: '/seller',
        action: container.resolve(Auth.SellerLoginController).login,
      });
      router.post({
        path: '/customer',
        action: container.resolve(Auth.CustomerLoginController).login,
      });
    });

    /**
     * Logout routes.
     */
    router.group({ prefix: '/logout' }, () => {
      router.post({
        path: '/admin',
        action: container.resolve(Auth.AdminLoginController).logout,
      });
      router.post({
        path: '/seller',
        action: container.resolve(Auth.SellerLoginController).logout,
      });
      router.post({
        path: '/customer',
        action: container.resolve(Auth.CustomerLoginController).logout,
      });
    });

    /**
     * Refresh token routes.
     */
    router.group(
      {
        prefix: '/refresh',
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
          path: '/customer',
          action: container.resolve(Auth.CustomerLoginController).refresh,
        });
      },
    );

    /**
     * Registration routes.
     */
    router.group({ prefix: '/register' }, () => {
      router.post({
        path: '/admin',
        action: container.resolve(Auth.AdminRegisterController).register,
        middleware: [
          container.resolve(Middleware.RequireAccessToken).handle(),
          container.resolve(Middleware.MustHaveRole).handle(['administrator']),
        ],
      });
      router.post({
        path: '/seller',
        action: container.resolve(Auth.SellerRegisterController).register,
      });
      router.post({
        path: '/customer',
        action: container.resolve(Auth.CustomerRegisterController).register,
      });
    });

    /**
     * Send activation email
     */
    router.group(
      {
        prefix: '/active',
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
          action: container.resolve(Auth.SellerRegisterController).resendEmail,
        });
        router.post({
          path: '/customer',
          action: container.resolve(Auth.CustomerRegisterController)
            .resendEmail,
        });
      },
    );

    /**
     * Verification routes.
     */
    router.group({ prefix: '/verify' }, () => {
      router.post({
        path: '/admin/:code',
        action: container.resolve(Auth.AdminVerifyController).verify,
      });
      router.post({
        path: '/seller/:code',
        action: container.resolve(Auth.SellerVerifyController).verify,
      });
      router.post({
        path: '/customer/:code',
        action: container.resolve(Auth.CustomerVerifyController).verify,
      });
    });

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
        path: '/customer',
        action: container.resolve(Auth.CustomerForgotPasswordController)
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
          .resetPassword,
      });
      router.post({
        path: '/seller/:code',
        action: container.resolve(Auth.SellerForgotPasswordController)
          .resetPassword,
      });
      router.post({
        path: '/customer/:code',
        action: container.resolve(Auth.CustomerForgotPasswordController)
          .resetPassword,
      });
    });
  });
}
