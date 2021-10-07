import CodeBlock from '../CodeBlock';

import { 
  Container,
  ModalCancelChallengeContainer,
  ModalToSendCodeSolution,
  BackgroundToNavMobile,
  Editor,
  LineCounter, 
  ToastNot
} from './styles';

import ReactMarkdown from 'react-markdown'
import { useState } from 'react';
import CodeEditor from '../CodeEditor';
import { FaCheckCircle, FaTimes } from 'react-icons/fa'

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

const Toast = ({ text, subtext }) => {
  return (
    <ToastNot>
      <div className="checkicon">
        <FaCheckCircle/>
      </div>
      <div className="texts">
        <h1>{text}</h1>
        <p>{subtext}</p>
      </div>
      <div className="closeicon">
        <FaTimes/>
      </div>
    </ToastNot>
  )
}

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
      <Editor>
        <LineCounter>
          {new Array(200).fill(" ").map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </LineCounter>
        <CodeEditor/>
      </Editor>
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
        <ReactMarkdown components={{CodeBlock}} children={markdown}/>
        <div className="buttons">
          <button className="send" onClick={() => setShowCode(!showCode)}>ENVIAR SOLUÇÃO</button>
          <button className="cancel" onClick={() => setShow(!show)}>CANCELAR DESAFIO</button>
        </div>
        <div className="toasts">
          <Toast text="Sucesso" subtext="Desafio enviado!"/>
        </div>
      </Container>
    </>
  );
};

export default Challenge;
