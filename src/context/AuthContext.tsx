import Router from 'next/router'
import { createContext, useEffect, useState } from 'react'
import { destroyCookie, parseCookies } from "nookies"
import jwt from 'jsonwebtoken'

export interface TypeUser {
  token: String
}

interface TypeAuthContext {
  user: TypeUser
  setUser: any
  logOut: () => void
}

export const AuthContext = createContext({} as TypeAuthContext)

const logOut = () => {
  destroyCookie(null, "py.plat.user.id")
  Router.push("/connect")
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const { "py.plat.user.id": token } = parseCookies()

  useEffect(() => {
    if (token) {
      setUser(token)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}