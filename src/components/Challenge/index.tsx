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
import materialOceanic from '../CodeBlock/theme'

import Editor from 'react-simple-code-editor';

import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-python';
import 'prismjs/themes/prism-dark.css';

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
  const [code, setCode] = useState("")
  return (
    <ModalCancelChallengeContainer>
      <h1>voce tem certeza que deseja cancelar o desafio?</h1>
      <Editor
        className="editor"
        value={code}
        defaultValue={code}
        onValueChange={code => setCode(code)}
        highlight={code => highlight(code, languages.markup, 'markup')}
        padding={15}
      />
      <button>CANCELAR</button>
    </ModalCancelChallengeContainer>
  )
}

const ModalSendCode = () => {
  const [content, setContent] = useState("")

	const onCodeChange = (codeString) => {
		setContent(codeString);
	}

  return (
    <ModalToSendCodeSolution>
      <h1>Cole seu codigo aqui!</h1>
      <div 
        className="code" 
      >
        <SyntaxHighlighter
          style={materialOceanic}
          language="python"
          spellcheck="false"
          contentEditable="true"
          onChange={(e: any) => onCodeChange(e.target.value)}
        >
          {content}
        </SyntaxHighlighter>
      </div>
      <button>ENVIAR</button>
    </ModalToSendCodeSolution>
  )
}

function Challenge() {
  const [show, setShow] = useState(false)
  const [showCode, setShowCode] = useState(false)

  return (
    <>
      {
        show && (
          <ModalCancelChallenge/>
        ) 
      }
      {
        showCode && (
          <ModalSendCode/>
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
