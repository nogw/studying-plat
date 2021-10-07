import { FaPython } from 'react-icons/fa';

import { 
  Container, 
  Icon, 
  NavBtn,
  List, 
  Bgc, 
  ListItem, 
  LinkRedirect,
  ContainerNav,
  NavBtnMbl
} from './styles';
import Link from 'next/link'

import { useRouter } from 'next/router'
import { RiBarChartHorizontalLine } from 'react-icons/ri'
import { MdClose } from 'react-icons/md'
import { useState } from 'react';

import { AnimatePresence } from 'framer-motion'


const textAnimation = {
  initial: { 
    x: -25,
    transition: {
      duration: 0.4,
    }
  },
  onhover: {
    x: -5,
    transition: {
      duration: 0.4,
    }
  }
}


function NavbarMobile( { show, setShow }) {
  const Li = ({to, content}) => {
    return (
      <Link href={to}>
        <ListItem onClick={() => setShow(!show)}>
          {content}
        </ListItem>
      </Link>
    )
  }

  return (
    <AnimatePresence>
      {
        show && (
          <ContainerNav>
            <List
              show={show}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Li to="/perfil" content="Perfil"/>
              <Li to="/" content="Desafios"/>
              <Li to="/completos" content="Completos"/>
              <Li to="/progresso" content="Progresso"/>
            </List>
            <Bgc
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </ContainerNav>
        )
      }
    </AnimatePresence>
  );
};

function Navbar() {
  const [show, setShow] = useState(false)

  const router = useRouter()
  const currentRoute = router.asPath

  return (
    <>
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
            {
              show && (
                <MdClose 
                  className="icon-close" 
                  onClick={() => setShow(!show)}
                />
              )
            }
            {
              !show && (
                <RiBarChartHorizontalLine 
                  className="icon"
                  onClick={() => setShow(!show)}
                />
              )
            }
          </div>
        </div>
      </Container>
      <NavbarMobile setShow={setShow} show={show} />
    </>
  );
};

export default Navbar;
