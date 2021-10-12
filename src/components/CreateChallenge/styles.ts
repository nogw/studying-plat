import styled from 'styled-components';

export const Container = styled.div`
  background-color: #202225;
  padding: 12px;
  border-radius: 8px;
  height: auto;
  display: flex;

  .inputs { 
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 100%;

    input {
      padding: 12px;
      background-color: #2f3134;
      border: 2px solid #2f3134;
      color: #fff;
      font-weight: bold;
      outline: none;
      border-radius: 8px;

      &::placeholder {
        color: #a3a3a3;
        font-size: 12px;
        font-weight: bold;
        font-family: "Roboto Mono";
      }
    }
    
    button {
      padding: 8px 8px 9px 8px;
      background-color: #2f3134 ;
      cursor: pointer;
      outline: none;
      width: 100%;
      border-radius: 8px;
      
      font-family: "Roboto Mono";
      border: 2px solid #2f3134;
      color: #fff;
      font-weight: 900;
      transition: 200ms ease all;

      &:hover {
        background-color: #6cba6b;
        border : 2px solid #6cba6b;
      }
    }
  }
`;

type ButtonMarkdownTypes = {
  active: boolean
}

export const ButtonMarkdown = styled.button<ButtonMarkdownTypes>`
  white-space: nowrap; 
  background-color: ${props => props.active ? "#768BD4" : "#2f3134"};
  border-radius: 8px;
  outline: none;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  font-weight: bold;
  transition: 400ms ease all;

  &:hover {
    background-color: #768BD4;
  }
`

export const MarkdownContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  .bts {
    display: flex;
    gap: 12px;
  }

  .markdown {
    overflow: auto;
    background-color: #2f3134;
    border-radius: 6px;
    padding: 6px;
    height: 215px;
    width: 100%;
  }

  textarea {
    resize: none;
    background-color: #2f3134;
    color: #fff;
    border-radius: 6px;
    border: none;
    outline: none;
    padding: 6px;
    height: 215px;
    width: 100%;
  }
`;
