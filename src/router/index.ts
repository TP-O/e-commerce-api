import { Express, Router } from 'express';
import { lrouter } from 'laravel-expressjs-router';

const router = lrouter(Router(), __dirname, '/../controller');

router.get('/', (_: any, res: any) => {
  res.status(200).json({
    message: 'Welcome to E-commerce API!',
  });
});

router.group({ prefix: '/api/v1' }, () => {
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
          namespace: '/admin',
        },
        () => {
          router.post('/login', 'login.controller@login');
          router.post('/logout', 'login.controller@logout');
          router.post('/refresh', 'login.controller@refresh');
          router.post('/register', 'register.controller@register');
        },
      );

      /**
       * Seller authentication.
       */
      router.group(
        {
          prefix: '/seller',
          namespace: '/seller',
        },
        () => {
          router.post('/login', 'login.controller@login');
          router.post('/logout', 'login.controller@logout');
          router.post('/refresh', 'login.controller@refresh');
          router.post('/register', 'register.controller@register');
        },
      );

      /**
       * User authentication.
       */
      router.group(
        {
          prefix: '/user',
          namespace: '/user',
        },
        () => {
          router.post('/login', 'login.controller@login');
          router.post('/logout', 'login.controller@logout');
          router.post('/refresh', 'login.controller@refresh');
          router.post('/register', 'register.controller@register');
        },
      );
    },
  );
});

export const registerRouter = (app: Express) => {
  app.use(router.init());
};
