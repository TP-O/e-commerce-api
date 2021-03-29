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
        router.post('/', 'user.controller@create');
        router.put('/:id', 'user.controller@update');
        router.delete('/:id', 'user.controller@delete');
      },
    );

    router.group(
      {
        prefix: '/admins',
      },
      () => {
        router.get('/', 'admin.controller@all');
        router.get('/:id', 'admin.controller@index');
        router.post('/', 'admin.controller@create');
        router.put('/:id', 'admin.controller@update');
        router.delete('/:id', 'admin.controller@delete');
      },
    );

    router.group(
      {
        prefix: '/salesmans',
      },
      () => {
        router.get('/', 'salesman.controller@all');
        router.get('/:id', 'salesman.controller@index');
        router.post('/', 'salesman.controller@create');
        router.put('/:id', 'salesman.controller@update');
        router.delete('/:id', 'salesman.controller@delete');
      },
    );
  },
);

export const registerRouter = (app: Express) => {
  app.use(router.init());
};
