import { Container } from './styles';

function TerminalBlock() {
  return (
    <Container>
      <code>
        {`C:/Users/user>python arquive.py
value: 2
value: 6
8`}
      </code>
    </Container>
  );
};

export default TerminalBlock;
