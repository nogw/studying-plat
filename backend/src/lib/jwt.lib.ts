import jwt, { JwtPayload } from 'jsonwebtoken'

type Maybe<T> = T | null | undefined;

// TODO: add type to payload

const encode = (payload) => {
  jwt.sign(payload, process.env.JWT as string, {
    expiresIn: "24h"
  })
}

const decode = (bearer_token: string) => {
  try {
    const [token] = bearer_token.split(" ")
    const payload = jwt.verify(token, process.env.JWT)
    return payload
  } catch (error) {
    return null
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