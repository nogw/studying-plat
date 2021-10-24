import axios from "axios";
import { parseCookies } from "nookies"

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL, 
  headers: {
    authorization: "token"
  }
})