import { Container } from './styles';
import Register from '../Register';
import Login from '../Login';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group'

function LoginAndRegister() {
  const [componentNow, setComponentNow] = useState('login')

  return (
    <Container>
      <CSSTransition 
        in={componentNow === 'login'}
        unmountOnExit 
        timeout={500} 
        classNames="menu-primary"
      >
        <Login setComponentNow={setComponentNow}/>
      </CSSTransition>

      <CSSTransition 
        in={componentNow === 'register'}
        unmountOnExit 
        timeout={500} 
        classNames="menu-primary"
      >
        <Register setComponentNow={setComponentNow}/>
      </CSSTransition>
    </Container>
  );
};

export default LoginAndRegister;
