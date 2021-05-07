import { nodeConfig } from '@configs/node';
import { Express, Router } from 'express';
import { lrouter } from 'laravel-expressjs-router';
import { useAdsRoutes } from './ads';
import { useAuthRoutes } from './auth';
import { useCategoryRoutes } from './category';
import { useFeedbackRoutes } from './feedback';
import { useProductRoutes } from './product';

const router = lrouter({
  router: Router(),
  currentDir: nodeConfig.appDir,
});

router.get({
  path: '/',
  action: (_: any, res: any) => {
    res.status(200).json({
      message: 'Welcome to E-commerce API!',
    });
  },
});

router.group({ prefix: '/api/v1' }, () => {
  useAuthRoutes(router);
  useProductRoutes(router);
  useCategoryRoutes(router);
  useFeedbackRoutes(router);
});



export const registerRouter = (app: Express) => {
  app.use(router.init());
};
