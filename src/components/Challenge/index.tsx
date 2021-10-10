import { 
  Container,
  ModalCancelChallengeContainer,
  ModalToSendCodeSolution,
  BackgroundToNavMobile,
  Editor,
  LineCounter,
  EditorContainer,
  Textarea,
  Code,
  Solution, 
} from './styles';

import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa'
require("prismjs/components/prism-python")
import Prism from "prismjs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NProgress from 'nprogress'; 
import { api } from '../../utils/api';
import materialOceanic from './theme'
import TerminalBlock from '../TerminalBlock';

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

const ModalSendCode = ({ notify, challengeId, showCode }) => {
  const data = `# Cole seu codigo aqui!\n\n\n`;
  const [code, setCode] = useState(data)

  const handleSendCode = async () => {
    NProgress.start();
    console.log(challengeId)
    try {
      await api.post("/challenge/user/send", {
        challengeId: challengeId,
        userId: "6160db7f7c09f23da4f17aee",
        solution: code
      }) 
      notify()
      NProgress.done();
    } catch (error) {
      console.log(error)
    }
    showCode(false)
  }

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <ModalToSendCodeSolution>
      <div className="close">
        <h1>Enviar solução do desafio</h1>
        <FaTimes onClick={() => showCode(false)} className="icon-close"/>
      </div>
      <EditorContainer>
        <LineCounter>
          {new Array(200).fill(" ").map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </LineCounter>
        <Editor>
          <Textarea
            value={code}
            spellCheck={false}
            onChange={(evt) => setCode(evt.target.value)}
          />

          <Code className="code-output">
            <code className="language-python">{code}</code>
          </Code>
        </Editor>
      </EditorContainer>
      <button onClick={handleSendCode}>Enviar codigo</button>
    </ModalToSendCodeSolution>
  )
}

function Challenge({ id, markdown, solution }) {
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
          <ModalSendCode challengeId={id} showCode={setShowCode} notify={notify}/>
        )
      }
      <Container>
        <BackgroundToNavMobile showNav={show || showCode} onClick={() => {
          setShow(false) 
          setShowCode(false)
        }}/>
        <ReactMarkdown components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              match[1] === "term" ? (
                <TerminalBlock text={String(children).replace(/\n$/, '')}/>
              ) : (
                <SyntaxHighlighter  style={materialOceanic} language={match[1]}  PreTag="div"  children={String(children).replace(/\n$/, '')}  {...props}/>
              )
            ) : (
              <code className={className} {...props}>{children}</code>
            )
          }
        }} children={markdown}/>
        {
          solution ? (
            <Solution>
              <h1 className="title">Voce já enviou esse desafio, aguarde analise</h1>
              <h2>Sua solução:</h2>
              <SyntaxHighlighter  style={materialOceanic} language="python" PreTag="div"  children={solution.solution}/>
            </Solution>
          ) : (
            <div className="buttons">
              <button className="send" onClick={() => setShowCode(!showCode)}>ENVIAR SOLUÇÃO</button>
              <button className="cancel" onClick={() => setShow(!show)}>CANCELAR DESAFIO</button>
            </div>
          )
        }
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
