import jwt, { JwtPayload } from 'jsonwebtoken'

// TODO: add type to payload
const encode = (payload) => {
  jwt.sign(payload, process.env.JWT as string, {
    expiresIn: "24h"
  })
}

const decode = async (bearer_token: string) => {
  try {
    const [token] = bearer_token.split(" ")
    const payload = await jwt.verify(token, process.env.JWT as string)
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