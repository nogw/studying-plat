import { NextFunction, Request, Response } from 'express'
import Jwt from '../lib/jwt.lib'

const token_validator = async (req: Request, res: Response, next: NextFunction) => {
  const payload = req.headers.authorization;

  if (!payload) {
    return res.status(400).json({
      error: "token is required"
    })
  }

  try {
    const decoded = await Jwt.decode(payload)
    req.body.token_payload = decoded || { _id: null }
    return next();
  } catch (error) {
    return res.status(400).json({
      error: "token is invalid"
    })
  }
}

export default token_validator