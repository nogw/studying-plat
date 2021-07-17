import CodeBlock from '../CodeBlock';

import { 
  Container,
  ModalCancelChallengeContainer,
  ModalToSendCodeSolution 
} from './styles';

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
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
      <h1>voce tem certeza que deseja cancelar o desafio?</h1>
      <button>CANCELAR</button>
    </ModalCancelChallengeContainer>
  )
}

const ModalSendCode = ({ code, setCode }) => {
  return (
    <ModalToSendCodeSolution>
      <h1>Cole seu codigo aqui!</h1>
        <textarea 
          className="code" 
          spellCheck="false"
          value={code}
          onChange={(e: any) => setCode(e.target.value)}
        />
      <button>ENVIAR</button>
    </ModalToSendCodeSolution>
  )
}

function Challenge() {
  const [show, setShow] = useState(false)
  const [showCode, setShowCode] = useState(false)
  const [code, setCode] = useState("")

  return (
    <>
      {
        show && (
          <ModalCancelChallenge/>
        ) 
      }
      {
        showCode && (
          <ModalSendCode code={code} setCode={setCode}/>
        )
      }
      <Container>
        <BackgroundToNavMobile showNav={show || showCode} onClick={() => {
          setShow(false) 
          setShowCode(false)
        }}/>
        <ReactMarkdown components={CodeBlock} children={markdown}/>
        <div className="buttons">
          <button className="send" onClick={() => setShowCode(!showCode)}>ENVIAR SOLUÇÃO</button>
          <button className="cancel" onClick={() => setShow(!show)}>CANCELAR DESAFIO</button>
        </div>
      </Container>
    </>
  );
};

export default Challenge;
