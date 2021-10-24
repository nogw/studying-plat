require('dotenv').config()
import express from 'express'
import cors from 'cors'
import router from './router'
import db from './db'
import token_validator from './middlewares/token.required.middleware'

export const app = express()
const port = process.env.PORT || 8000

app.use(express.json())
app.use(cors())
app.use("/", router)

db.connect()

app.listen(port, () => {
  console.log(`run in ${port}`)
})