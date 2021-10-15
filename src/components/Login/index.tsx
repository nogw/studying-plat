import { useEffect } from 'react';
import { useState } from 'react';
import NProgress from 'nprogress'; 
import { setCookie } from 'nookies'

import { 
  Container,
  Input 
} from './styles';
import { api } from '../../utils/api';
import Router from 'next/router'

interface IErrors {
  emailError?: string,
  passwordError?: string,
}

function Login({ setComponentNow }) {
  const [errors, setErrors] = useState<IErrors>({
    passwordError: "required",
  })

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const handleLogin = async () => {
    NProgress.start()

    try {
      const response: any = await api.post("/user/login", {
        email: form.email,
        password: form.password
      })

      setCookie(null, 'py.plat.user.id', response.data.message, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/"
      })

      Router.push("/")
    } catch (error) {
      console.log(error)      
    }

    NProgress.done()
  }

  const updateForm = e => {
    const { name, value } = e.target
    setForm(prev => ({...prev, [name]: value }))
  }

  useEffect(() => {
    setErrors({})
  }, [])

  return (
    <Container>
      <Input error={errors.emailError}>
        <input onChange={(e) => updateForm(e)} type="text" name="email"/>
        <label htmlFor="email">
          Email 
          {
            errors.emailError && <p>- {errors.emailError}</p>
          }
        </label>
      </Input>
      <Input error={errors.passwordError}>
        <input onChange={(e) => updateForm(e)} type="password" name="password"/>
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
