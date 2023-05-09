import { Prisma } from '@prisma/client';
import request from 'supertest';

import prisma from '@orm/client';

import createServer from '../../../createServer';

const fakeProduct: Prisma.ProductUncheckedCreateInput = {
  title: 'Title',
  description: 'Description',
  price: '1000.00'
};

const app = createServer();

beforeAll(async () => {
  await prisma.product.deleteMany();
});

afterEach(async () => {
  await prisma.product.deleteMany();
});

afterAll(async () => {
  await prisma.product.deleteMany();
});

describe('Products controller', () => {
  describe('getAll', () => {
    beforeEach(async () => {
      await prisma.product.create({
        data: fakeProduct
      });
    });

    it('should return 1 product', async () => {
      const { status, body } = await request(app).get('/');

      expect(status).toBe(200);
      expect(body).toEqual(expect.arrayContaining([expect.objectContaining(fakeProduct)]));
    });
  });

  describe('add', () => {
    it('should create 1 product', async () => {
      const { status } = await request(app).post('/').send(fakeProduct);

      expect(status).toBe(201);

      const dataInDB = await prisma.product.findMany();

      expect(dataInDB).toEqual(expect.arrayContaining([expect.objectContaining(fakeProduct)]));
    });
  });
});
