import { OrderController } from '@app/controllers/order/order-controller';
import * as Middleware from '@app/middleware';
import { LRouter } from 'laravel-expressjs-router';
import { container } from 'tsyringe';

export function useOrderRoutes(router: LRouter) {
  /**
   * Order routes.
   */
  router.group(
    {
      prefix: '/order',
      middleware: [container.resolve(Middleware.RequireAccessToken).handle()],
    },
    () => {
      router.group(
        {
          middleware: [
            container
              .resolve(Middleware.MustHaveRole)
              .handle(['normal customer', 'VIP customer']),
          ],
        },
        () => {
          router.get({
            path: '/',
            action: container.resolve(OrderController).getOrder,
          });

          router.post({
            path: '/create',
            action: container.resolve(OrderController).createOrder,
          });
        },
      );

      router.put({
        path: '/status',
        action: container.resolve(OrderController).updateStatus,
        middleware: [
          container
            .resolve(Middleware.MustHaveRole)
            .handle(['individual', 'company']),
        ],
      });
    },
  );
}
