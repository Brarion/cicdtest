import { Request as ExpressRequest } from 'express';

export type Request<
  ReqBody = never,
  ResBody = never,
  ReqQuery = import('express-serve-static-core').Query
> = ExpressRequest<
  import('express-serve-static-core').ParamsDictionary,
  ResBody,
  ReqBody,
  ReqQuery
>;
