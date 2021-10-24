import jwt, { JwtPayload } from 'jsonwebtoken'

const encode = (payload: string | JwtPayload) => {
  return jwt.sign(payload, process.env.JWT, {
    expiresIn: "24h"
  })
}

const decode = async (token: string) => {
  try {
    const payload = await jwt.verify(token, process.env.JWT as string)
    return payload
  } catch (err: any) {
    throw new Error(err);
  }
}

export default {
  decode,
  encode
}