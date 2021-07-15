import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { Container } from './styles';
import materialOceanic from './theme'
import TerminalBlock from '../TerminalBlock';

const CodeBlock = {
  code({node, inline, className, children, ...props}) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      match[1] === "term" ? (
        <TerminalBlock 
          text={String(children).replace(/\n$/, '')}
        />
      ) : (
          <SyntaxHighlighter 
            style={materialOceanic}
            language={match[1]} 
            PreTag="div" 
            children={String(children).replace(/\n$/, '')} 
            {...props}
          />
      )
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }
};

export default CodeBlock;
