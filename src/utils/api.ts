import axios from "axios";
import { parseCookies } from "nookies"

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL, 
})

const cookies = parseCookies()
api.defaults.headers.common["authorization"] = cookies