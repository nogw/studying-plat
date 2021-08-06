import { AnySchema, ValidationError } from 'yup'
import Yup from './yup.schemas'

export interface FormattedYupError {
  status: number;
  path: string;
  message: string;
}

const format_yup_error = (error: ValidationError): Array<FormattedYupError> => {
  return error.inner.map<any>(({ path, message }) => ({
    path,
    message
  }));
}

const yupValidation = async (object: object, schema: AnySchema) => {
  try {
    await schema.validate(object, { abortEarly: true })
    return null
  } catch (error) {
    return format_yup_error(error)
  }
}

export default yupValidation