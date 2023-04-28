import express from 'express';

import { TestRouter } from '@routes';

const createServer = (): express.Express => {
  const app = express();

  app.use(express.json({ limit: '1mb' }));

  app.use('/', TestRouter);

  return app;
};

export default createServer;
