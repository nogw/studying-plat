import { AnySchema, ValidationError } from 'yup'
import Yup from './yup.schemas'

type FormattedYupError = {
  status: number;
  path: string;
  message: string;
}

type Maybe<T> = T | null;

const format_yup_error = (error: ValidationError) =>
  error.inner.map<any>(({ path, message }) => ({
    path,
    message
  }));

const yupValidation = async (
  object: object, 
  schema: AnySchema
): Promise<Maybe<FormattedYupError[]>> => {
  try {
    await schema.validate(object, { abortEarly: false });
    return null;
  } catch (error) {
    return format_yup_error(error)
  }
}

export default yupValidation