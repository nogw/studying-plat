import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { Container } from './styles';
import materialOceanic from './theme'

function CodeBlock() {
  return (
    <Container>
      <SyntaxHighlighter 
        style={ materialOceanic } 
        language="python"
      >
        {`num = int(input("Enter a number: "))

flag = False

if num > 1:
    for i in range(2, num):
        if (num % i) == 0:
            flag = True
            break`}
      </SyntaxHighlighter>
    </Container>
  );
};

export default CodeBlock;
