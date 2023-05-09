import { NextFunction, Response } from 'express';

import { Prisma, Product } from '@prisma/client';
import type { Request } from '@requestType';

import { ProductsService } from '@services';

const ProductsController = {
  getAll: async (req: Request, res: Response<Product[]>, next: NextFunction) => {
    ProductsService.getAll()
      .then(result => res.status(200).send(result))
      .catch(next);
  },
  add: async (
    req: Request<Prisma.ProductUncheckedCreateInput>,
    res: Response<never>,
    next: NextFunction
  ) => {
    ProductsService.add(req.body)
      .then(() => res.sendStatus(201))
      .catch(next);
  }
};

export default Object.freeze(ProductsController);
