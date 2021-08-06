import * as yup from 'yup'

const loginSchema = yup.object().shape({
  email: yup
      .string()
      .required("Email is required")
      .email("Email is invalid"),
  password: yup
      .string()
      .min(6, "Password confirmation must be more than 6 characters")
      .max(30, "Password confirmation less be more than 30 characters")
      .required("Email is required"),
})

const registerSchema = yup.object().shape({
  name: yup
      .string()
      .required("Name is required"),
  email: yup
      .string()
      .required("Email is required")
      .email("Email is invalid"),
  password: yup
      .string()
      .min(6, "Password confirmation must be more than 6 characters")
      .max(30, "Password confirmation less be more than 30 characters")
      .required("Password is required"),
  passwordConfirm: yup
      .string()
      .min(6, "Password confirmation must be more than 6 characters")
      .max(30, "Password confirmation less be more than 30 characters")
      .required("Password confirmation is required")
})

export default {
  loginSchema,
  registerSchema
}