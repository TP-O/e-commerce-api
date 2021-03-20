import { Express, Router } from 'express';
import { lrouter } from 'laravel-expressjs-router';

const router = lrouter(Router(), __dirname, '/../controller');

router.get('/', (_: any, res: any) => {
  res.status(200).json({
    message: 'Welcome to E-commerce API!',
  });
});

router.group(
  {
    prefix: '/api/v1',
  },
  () => {
    router.group(
      {
        prefix: '/users',
      },
      () => {
        router.get('/', 'user.controller@all');
        router.get('/:id', 'user.controller@index');
      },
    );
  },
);

export const registerRouter = (app: Express) => {
  app.use(router.init());
};
