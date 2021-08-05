import jwt, { JwtPayload } from 'jsonwebtoken'

const encode = (payload: string | JwtPayload) => {
  jwt.sign(payload, process.env.JWT, {
    expiresIn: "24h"
  })
}

const decode = async (bearer_token: string) => {
  try {
    const [token] = bearer_token.split(" ")
    const payload = await jwt.verify(token, process.env.JWT as string)
    return payload
  } catch (err) {
    return {}
  }
}

const refresh = async (token: string) => {
  encode(await decode(token))
}

export default {
  decode,
  encode,
  refresh
}