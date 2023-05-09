import { Prisma } from '@prisma/client';

import { ProductsModel } from '@models';

const ProductsService = {
  getAll: async () => {
    const products = await ProductsModel.getAll();

    return products;
  },
  add: async (product: Prisma.ProductUncheckedCreateInput) => {
    await ProductsModel.add(product);
  }
};

export default Object.freeze(ProductsService);
