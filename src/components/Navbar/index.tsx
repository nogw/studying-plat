import { FaPython } from 'react-icons/fa';
import { Container, Icon } from './styles';
import Link from 'next/link'

function Navbar() {
  return (
    <Container>
      <div className="title">
        <Icon>
          <FaPython className="pyIcon"/>
        </Icon>
        <h1>python</h1>
      </div>

      <div className="nav">
        <Link href="/challenges">
          Desafios
        </Link>
        <Link href="/challenges">
          Completos
        </Link>
        <Link href="/challenges">
          Progresso
        </Link>
      </div>

      <div className="profile">
        <h1>AL</h1>
      </div>
    </Container>
  );
};

export default Navbar;
