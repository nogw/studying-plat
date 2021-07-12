import CodeBlock from '../CodeBlock';
import TerminalBlock from '../TerminalBlock';
import { Container } from './styles';

import ReactMarkdown from 'react-markdown'

const markdown = `
  # Python API
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero eius velit aut vel ut consequatur, magnam officiis. Adipisci magni, distinctio, consequatur totam voluptas praesentium a ad repellat, molestiae quasi eius.
  ~~~js
  console.log('It works!')
  ~~~
`

function Challenge() {
  return (
    <Container>
      <ReactMarkdown components={CodeBlock} children={markdown}/>
      <TerminalBlock/>
    </Container>
  );
};

export default Challenge;
