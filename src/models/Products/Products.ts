import { Prisma } from '@prisma/client';

import prisma from '@orm/client';

const ProductsModel = {
  getAll: async () => {
    const products = await prisma.product.findMany();

    return products;
  },
  add: async (product: Prisma.ProductUncheckedCreateInput) => {
    await prisma.product.create({
      data: product
    });
  }
};

export default Object.freeze(ProductsModel);
