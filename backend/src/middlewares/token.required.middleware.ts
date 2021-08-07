import { NextFunction, Request, Response } from 'express'
import Jwt from '../lib/jwt.lib'

const token_validator = async (req: Request, _: Response, next: NextFunction) => {
  const payload = await Jwt.decode(req.headers.authorization!);
  req.body.token_payload = payload || { _id: null };
  return next();
}

export default token_validator