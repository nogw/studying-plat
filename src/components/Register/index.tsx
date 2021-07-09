import NProgress from 'nprogress';
import { useEffect, useState } from 'react';
import { 
  Container,
  Input 
} from './styles';

interface IErrors {
  nameError?: string,
  emailError?: string,
  passwordError?: string,
  passwordConfirmError?: string,
}

const handleRegister = () => {
  NProgress.start()
  NProgress.done()
}

function Register({ setComponentNow }) {
  const [errors, setErrors] = useState<IErrors>({
    passwordError: "required",
  })

  useEffect(() => {
    setErrors({})
  }, [])

  return (
    <Container>
      <Input error={errors.nameError}>
        <input type="text" name="email"/>
        <label htmlFor="email">
          Name 
          {
            errors.nameError && <p>- {errors.nameError}</p>
          }
        </label>
      </Input>
      <Input error={errors.emailError}>
        <input type="text" name="email"/>
        <label htmlFor="email">
          Email 
          {
            errors.emailError && <p>- {errors.emailError}</p>
          }
        </label>
      </Input>
      <Input error={errors.passwordError}>
        <input type="text" name="password"/>
        <label htmlFor="password">
          Password
          {
            errors.passwordError && <p>- {errors.passwordError}</p>
          }
        </label>
      </Input>
      <Input error={errors.passwordConfirmError}>
        <input type="text" name="password"/>
        <label htmlFor="password">
          Password Confirm
          {
            errors.passwordConfirmError && <p>- {errors.passwordConfirmError}</p>
          }
        </label>
      </Input>

      <button onClick={handleRegister}>Registrar</button>

      <p className="registerP">já tem uma conta? <span onClick={() => setComponentNow("login")}>Entrar</span></p>
    </Container>
  );
};

export default Register;
