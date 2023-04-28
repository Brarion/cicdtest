import { Router } from 'express';

import { TestController } from '@controllers';

const TestRouter = Router();

// Регистрация через Почту
TestRouter.route('/test').get(TestController.test);

export default Object.freeze(TestRouter);
