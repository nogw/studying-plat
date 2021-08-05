import { NextFunction, Request } from 'express'
import Jwt from '../lib/jwt.lib'

// TODO: add type to res
const token_validator = async (res, next: NextFunction) => {
  const payload = await Jwt.decode(res.headers.authorization);
  res.body.token_payload = payload || { _id: null };
  return next();
}

export default token_validator