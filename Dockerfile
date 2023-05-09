FROM node:14.18.2

WORKDIR /products

COPY ["package.json", "tsconfig.json", ".env", "./"]

COPY . .

RUN yarn install

RUN yarn build