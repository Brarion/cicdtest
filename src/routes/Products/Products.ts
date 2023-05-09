import { Router } from 'express';

import { ProductsController } from '@controllers';

const ProductsRouter = Router();

ProductsRouter.route('/').get(ProductsController.getAll).post(ProductsController.add);

export default Object.freeze(ProductsRouter);
