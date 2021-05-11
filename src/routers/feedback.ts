import { LRouter } from 'laravel-expressjs-router';
import * as Middleware from '@app/middleware';
import { container } from 'tsyringe';
import { FeedbackController } from '@app/controllers/product/feedback-controller';

export function useFeedbackRoutes(router: LRouter) {
  /**
   * Product routes.
   */
  router.group({ prefix: '/feedbacks' }, () => {
    router.post({
      path: '/',
      action: container.resolve(FeedbackController).create,
      middleware: [
        container.resolve(Middleware.RequireAccessToken).handle(),
        container
          .resolve(Middleware.MustHaveRole)
          .handle(['normal customer', 'VIP customer']),
      ],
    });
  });
}
