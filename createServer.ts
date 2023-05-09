import express from 'express';

import { ProductsRouter } from '@routes';

const createServer = (): express.Express => {
  const app = express();

  app.use(express.json({ limit: '1mb' }));

  app.use('/', ProductsRouter);

  return app;
};

export default createServer;
