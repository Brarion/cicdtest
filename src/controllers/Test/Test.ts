import { Request, Response } from 'express';

import { TestService } from '@services';

const TestController = {
  test: (req: Request, res: Response<string>) => {
    const result = TestService.test();

    console.count();

    res.status(200).send(result);
  }
};

export default Object.freeze(TestController);
