import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ButtonMarkdown, Container, MarkdownContainer } from './styles';

function CreateChallenge() {
  const [editor, setEditor] = useState("")
  const [text, setText] = useState("")

  return (
    <Container>
      <div className="inputs">
        <input type="text" placeholder="Title"/>
        <input type="text" placeholder="Description"/>
        <input type="number" placeholder="Points"/>
        <input type="text" placeholder="Limit"/>
        <button>Send</button>
      </div>
      <MarkdownContainer>
        <div className="bts">
          <ButtonMarkdown onClick={() => setEditor("editor")} active={editor == "editor"}>Editor</ButtonMarkdown>
          <ButtonMarkdown onClick={() => setEditor("preview")} active={editor != "editor"}>Preview</ButtonMarkdown>
        </div>
        {
          editor == "editor" ? (
            <textarea spellCheck="false" value={text} onChange={(e) => setText(e.target.value)}/>
          ) : (
            <div className="markdown">
              <ReactMarkdown>
                {text}
              </ReactMarkdown>
            </div>
          )
        }
      </MarkdownContainer>
    </Container>
  );
};

export default CreateChallenge;
