import { Container } from './styles';

function TerminalBlock({ text }) {
  return (
    <Container>
      <code>
        {`C:/Users/user>python arquive.py
`}
        {text}
      </code>
    </Container>
  );
};

export default TerminalBlock;
