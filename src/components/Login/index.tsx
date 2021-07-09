import { useEffect } from 'react';
import { useState } from 'react';
import NProgress from 'nprogress'; 

import { 
  Container,
  Input 
} from './styles';

interface IErrors {
  emailError?: string,
  passwordError?: string,
}

const handleLogin = () => {
  NProgress.start()
  NProgress.done()
}

function Login({ setComponentNow }) {
  const [errors, setErrors] = useState<IErrors>({
    passwordError: "required",
  })

  useEffect(() => {
    setErrors({})
  }, [])

  return (
    <Container>
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

      <button onClick={handleLogin}>Entrar</button>
      <p className="registerP">precisando de uma conta? <span onClick={() => setComponentNow("register")}>Registre-se</span></p>
    </Container>
  );
};

export default Login;
