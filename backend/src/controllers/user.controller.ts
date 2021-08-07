import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'

import Jwt from '../lib/jwt.lib'
import Yup from '../validation/yup.schemas'
import yupValidation from '../validation/yup.validation'

import User from '../models/user.model'
import { ISchemaUser } from '../models/user.model'

const userRegister = async (req: Request, res: Response) => {
  const errors = await yupValidation(req.body, Yup.registerSchema)

  if (errors) {
    return res.status(400).json({
      error: errors
    })
  }

  try {
    const existingUser = await User.exists({ email: req.body.email })
    
    if (existingUser) {
      return res.status(400).json({
        error: { email: 'This email has already been registered' }
      })
    }
    
    return bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
      if (err) {
        return res.status(400).json({
          error: err
        })
      }
    
      let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPass,
      })
    
      user.save()
      .then((user: ISchemaUser) => {
        let token = Jwt.encode({
          id: user._id,
          name: user.name,
          permission: user.permission
        })
        return res.status(201).json({
          message: token
        })
      })
      .catch((error: string | object) => {
        return res.status(400).json({
          error: error
        })
      })
    })
  } catch (error) {
    return res.status(400).json({
      error: error
    })
  }
}

const userLogin = async (req: Request, res: Response) => {
  const errors = await yupValidation(req.body, Yup.loginSchema)

  if (errors) {
    return res.status(400).json({
      error: errors
    })
  }

  try {
    const user: any = await User.findOne({ email: req.body.email }).exec()

    if (!user) {
      return res.status(400).json({
        error: { email: "Could not find email." }
      })
    }

    return bcrypt.compare(req.body.password, user.password, (err, result) => {
      if (err) {
        return res.status(400).json({
          error: err
        })
      }
      if (result) {
        let token = Jwt.encode({
          id: user._id,
          name: user.name,
          permission: user.permission
        })
        
        return res.status(200).json({
          message: token
        })
      } 
      else {
        return res.status(400).json({
          password: 'Password does not matched!',
        })
      }
    })
  } catch (error) {
    return res.status(400).json({
      error: error
    })
  }
}

export default {
  userRegister,
  userLogin
}