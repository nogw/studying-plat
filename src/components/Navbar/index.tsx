import { FaPython } from 'react-icons/fa';
import { 
  Container, 
  Icon, 
  NavBtn,
  BackgroundToNavMobile,
  MobileNav, 
  NavBtnMbl
} from './styles';
import Link from 'next/link'

import { useRouter } from 'next/router'
import { RiBarChartHorizontalLine } from 'react-icons/ri'
import { useState } from 'react';

function Navbar() {
  const [show, setShow] = useState(false)

  const router = useRouter()
  const currentRoute = router.asPath

  return (
    <>
    <BackgroundToNavMobile showNav={show} onClick={() => setShow(!show)}/>

    <Container>
      <div className="box">
        <Link href="/">
          <div className="title">
            <Icon>
              <FaPython className="pyIcon"/>
            </Icon>
            <h1>python</h1>
          </div>
        </Link>
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
        <Link href="/perfil">
          <div className="profile">
            <h1>AL</h1>
          </div>
        </Link>
        <div className="navbtn">
          <RiBarChartHorizontalLine 
            className="icon"
            onClick={() => setShow(!show)}
          />
        </div>
      </div>
    </Container>
    <MobileNav showNav={show}>
      <RiBarChartHorizontalLine 
        className="icon"
        onClick={() => setShow(!show)}
      />
      <Link href="/">
        <NavBtnMbl active={currentRoute == "/"}>
          Desafios
        </NavBtnMbl>
      </Link>
      
      <Link href="/completos">
        <NavBtnMbl active={currentRoute == "/completos"}>
          Completos
        </NavBtnMbl>
      </Link>

      <Link href="/progresso">
        <NavBtnMbl active={currentRoute == "/progresso"}>
          Progresso
        </NavBtnMbl>
      </Link>
    </MobileNav>
    </>
  );
};

export default Navbar;
