import express from 'express'
import userController from './controllers/user.controller'

const router = express.Router()

router.route("/user/register")
  .post(userController.userRegister)

router.route("/user/login")
  .post(userController.userLogin)

export default router