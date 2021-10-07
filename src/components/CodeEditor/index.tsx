import { Container, Textarea, Code } from './styles';
import { useEffect, useState } from 'react';
require("prismjs/components/prism-python")
import Prism from "prismjs";

function CodeEditor() {
  const data = "# Cole seu codigo aqui!";
  const [content, setContent] = useState(data);

  useEffect(() => {
    Prism.highlightAll();
  }, [content]);

  return (
    <Container>
      <Textarea
        value={content}
        spellCheck={false}
        onChange={(evt) => setContent(evt.target.value)}
      />

      <Code className="code-output">
        <code className="language-python">{content}</code>
      </Code>
    </Container>
  );
};

export default CodeEditor;
