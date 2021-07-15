import CodeBlock from '../CodeBlock';
import TerminalBlock from '../TerminalBlock';
import { 
  Container,
  ModalCancelChallengeContainer 
} from './styles';

import ReactMarkdown from 'react-markdown'
import { BackgroundToNavMobile } from '../Navbar/styles';
import { useState } from 'react';

const markdown = `
  # Python API
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero eius velit aut vel ut consequatur, magnam officiis. Adipisci magni, distinctio, consequatur totam voluptas praesentium a ad repellat, molestiae quasi eius.
  ~~~python
  num = int(input("Enter a number: "))
  if (num % 2) == 0:
     print("{0} is Even".format(num))
  else:
     print("{0} is Odd".format(num))  
  ~~~
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero eius velit aut vel ut consequatur, magnam officiis. Adipisci magni, distinctio, consequatur totam voluptas praesentium a ad repellat, molestiae quasi eius.
  ~~~term
  value: 2
  value: 1
  3  
  ~~~
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero eius velit aut vel ut consequatur, magnam officiis. Adipisci magni, distinctio, consequatur totam voluptas praesentium a ad repellat, molestiae quasi eius.
`

const ModalCancelChallenge = () => {
  return (
    <ModalCancelChallengeContainer>
      <div className="modal">
        <h1>voce tem certeza que deseja cancelar o desafio?</h1>
        <button>CANCELAR</button>
      </div>
    </ModalCancelChallengeContainer>
  )
}

function Challenge() {
  const [show, setShow] = useState(false)

  return (
    <>
      {
        show && (
          <ModalCancelChallenge/>
        ) 
      }
      <BackgroundToNavMobile showNav={show} onClick={() => setShow(!show)}/>
      <Container>
        <ReactMarkdown components={CodeBlock} children={markdown}/>
        <div className="buttons">
          <button className="send" onClick={() => setShow(!show)}>ENVIAR SOLUÇÃO</button>
          <button className="cancel" onClick={() => setShow(!show)}>CANCELAR DESAFIO</button>
        </div>
      </Container>
    </>
  );
};

export default Challenge;
