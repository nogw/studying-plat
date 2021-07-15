import { FaPython } from 'react-icons/fa';
import { Container, Icon, NavBtn } from './styles';
import Link from 'next/link'

import { useRouter } from 'next/router'
import { RiBarChartHorizontalLine } from 'react-icons/ri'

function Navbar() {
  const router = useRouter()
  const currentRoute = router.asPath

  return (
    <Container>
      <div className="box">
        <div className="title">
          <Icon>
            <FaPython className="pyIcon"/>
          </Icon>
          <h1>python</h1>
        </div>
      </div>

      <div className="box">
        <div className="nav">
          <NavBtn active={currentRoute == "/"}>
            <Link href="/">
              Desafios
            </Link>
          </NavBtn>
          
          <NavBtn active={currentRoute == "/completos"}>
            <Link href="/completos">
              Completos
            </Link>
          </NavBtn>

          <NavBtn active={currentRoute == "/progresso"}>
            <Link href="/progresso">
              Progresso
            </Link>
          </NavBtn>
        </div>
      </div>

      <div className="box last">
        <div className="profile">
          <h1>AL</h1>
        </div>
        <div className="navbtn">
          <RiBarChartHorizontalLine className="icon"/>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
