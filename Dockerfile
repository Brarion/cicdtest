FROM node:14.18.2

RUN mkdir -p /auth
WORKDIR /auth

COPY tsconfig.json /auth/tsconfig.json
COPY package.json /auth/package.json
COPY yarn.lock /auth/yarn.lock

RUN yarn install

COPY . /auth

RUN yarn build
