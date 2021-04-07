import { nodeConfig } from '@configs/node';
import { Express, Router } from 'express';
import { lrouter } from 'laravel-expressjs-router';
import { useAuthRouter } from './auth';

const router = lrouter(Router(), nodeConfig.appDir);

router.get('/', (_: any, res: any) => {
  res.status(200).json({
    message: 'Welcome to E-commerce API!',
  });
});

router.group({ prefix: '/api/v1' }, () => {
  useAuthRouter(router);
});

export const registerRouter = (app: Express) => {
  app.use(router.init());
};
