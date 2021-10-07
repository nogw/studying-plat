import CodeBlock from '../CodeBlock';

import { 
  Container,
  ModalCancelChallengeContainer,
  ModalToSendCodeSolution,
  BackgroundToNavMobile,
  Editor,
  LineCounter, 
} from './styles';

import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react';
import CodeEditor from '../CodeEditor';
import { FaCheckCircle, FaTimes } from 'react-icons/fa'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const ModalCancelChallenge = ({ showCode }) => {
  return (
    <ModalCancelChallengeContainer>
      <div className="close">
        <h1>Cancelar desafio</h1>
        <FaTimes onClick={() => showCode(false)} className="icon-close"/>
      </div>
      <p>voce tem certeza que deseja cancelar o desafio?</p>
      <button>Cancelar desafio</button>
    </ModalCancelChallengeContainer>
  )
}

const ModalSendCode = ({ notify, showCode }) => {
  const [code, setCode] = useState("")

  const handleSendCode = () => {
    notify()
    showCode(false)
  }

  return (
    <ModalToSendCodeSolution>
      <div className="close">
        <h1>Enviar solução do desafio</h1>
        <FaTimes onClick={() => showCode(false)} className="icon-close"/>
      </div>
      <Editor>
        <LineCounter>
          {new Array(200).fill(" ").map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </LineCounter>
        <CodeEditor/>
      </Editor>
      <button onClick={handleSendCode}>Enviar codigo</button>
    </ModalToSendCodeSolution>
  )
}

function Challenge() {
  const [show, setShow] = useState(false)
  const [showCode, setShowCode] = useState(false)
  const notify = () => toast.success("Desafio enviado com sucesso!", {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 3000,
    draggable: true,
    theme: "dark" 
  })

  return (
    <>
      {
        show && (
          <ModalCancelChallenge showCode={setShow}/>
        ) 
      }
      {
        showCode && (
          <ModalSendCode showCode={setShowCode} notify={notify}/>
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
        <div className="toasts">
          <ToastContainer 
            draggable
          />
        </div>
      </Container>
    </>
  );
};

export default Challenge;
