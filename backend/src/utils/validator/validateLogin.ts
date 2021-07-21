import validator from 'validator'
import isEmpty from './isEmpty' 

const validateLogin = (data: any) => {
  const errors: any = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (validator.isEmpty(data.name)) {
    errors.name = 'Name is required'
  }

  if (!validator.isLength(data.name, { min: 3, max: 30 })) {
    errors.name = 'Name must have 6 and 30 characters'
  }

  if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid'
  }

  if (validator.isEmpty(data.email)) {
    errors.email = 'Email is required'
  }

  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must have 6 and 30 characters'
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'Password is required'
  }

  return {
    errors, 
    isValid: isEmpty(errors)
  }
}

export default validateLogin