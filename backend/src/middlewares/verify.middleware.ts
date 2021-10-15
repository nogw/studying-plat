import { NextFunction, Request, Response } from 'express'

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const permission = req.body.token_payload.permission == "admin"

  console.log(req.body.token_payload.permission)

  if (!permission) {
    return res.status(200).json({
      message: permission
    })
  }

  return next()
}