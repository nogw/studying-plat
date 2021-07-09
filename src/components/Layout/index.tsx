import { Container } from './styles';
import Navbar from '../Navbar'

function Layout({ children }) {
  return (
    <Container>
      <Navbar/>
      {children}
    </Container>
  );
};

export default Layout;
