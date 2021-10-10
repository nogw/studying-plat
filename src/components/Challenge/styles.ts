import styled, { css } from 'styled-components';
import TextareaAutosize from "react-textarea-autosize";

export const LineCounter = styled.div`
  position: absolute;
  left: 10px;
  top: 16px;
  bottom: 16px;
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  overflow: hidden;

  span {
    line-height: 24.8px;
    display: block;
    text-align: right;
  }
`;

export const EditorContainer = styled.div`
  background: #1a1d1f;
  padding: 16px 0;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.2);
  width: 100%;
  margin: auto;
  overflow-y: hidden;
  position: relative;

`;

export const Solution = styled.div`
  border-top: 2px solid #343434;
  padding-top: 12px;

  .title {
    font-size: calc(14px + 6 * ((100vw - 600px) / 2000));
    color: #cbcbcb;
  }

  h2 {
    font-size: calc(12px + 6 * ((100vw - 600px) / 2000));
    color: #cbcbcb;
    margin-top: 10px;
    margin-bottom: 14px;
  }
`;

export const Editor = styled.div`
  position: relative;
  margin-left: 48px;
`;

const common = css`
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  line-height: 1.5;
  display: block;

  font-size: 1em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;

  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
`;

export const Textarea = styled(TextareaAutosize)`
  ${common};
  width: 100%;
  color: white;
  background: none;
  resize: none;
  -webkit-font-smoothing: antialiased;
  opacity: 0.5;
  overflow: hidden;
`;

export const Code = styled.pre`
  ${common};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background: none !important;
  pointer-events: none;
  overflow: hidden;
  color: transparent;

  &,
  code {
    margin: 0 !important;
    padding: 0 !important;
  }
`;

export const Container = styled.div`
  background-color: #202225;
  border-radius: 8px;
  padding: 20px 20px;
  width: 600px;
  color: #fff;
  font-family: "Roboto Mono";
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 18px;
  
  .toasts {
    .Toastify__progress-bar--success {
      background: #6cba6b;
    }

    .Toastify__toast-icon {
      svg {
        filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(95deg) brightness(120%) contrast(50%);
      }
    }
  }
  
  h1 {
    font-size: calc(24px + 6 * ((100vw - 600px) / 2000));
  }

  p {
    font-size: calc(14px + 4 * ((100vw - 600px) / 2000));
  }

  .buttons {
    display: flex;
    margin-top: 10px;
    gap: 15px;

    button {
      padding: 8px 8px 9px 8px;
      background-color: transparent;
      cursor: pointer;
      border-radius: 4px;
      outline: none;
      width: 100%;
      
      font-family: Roboto;
      border: 2px solid #a7a7a9;
      color: #a7a7a9;
      font-weight: 900;
      transition: 200ms ease all;
    }

    .send:hover {
      color: #6cba6b;
      border : 2px solid #6cba6b;
    }

    .cancel:hover {
      color: #e63946;
      border : 2px solid #e63946;
    }
  }

  @media screen and (max-width: 640px) {
    width: 100%;

    .buttons {
      flex-direction: column;
      gap: 10px;
    }
  }
`;

export const ModalCancelChallengeContainer = styled.div`
  position: fixed;
  z-index: 999;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .close {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    .icon-close {
      cursor: pointer;
    }

    h1 {
      font-size: 16px;
      text-align: center;
    }
  }
  
  background-color: #202225;
  border-radius: 8px;
  font-family: Roboto;
  color: #fff;
  gap: 22px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 18px 32px 26px 32px;

  max-width: 300px;
  width: 100%;

  button {
    padding: 8px 8px 9px 8px;
    background-color: #e63946;
    cursor: pointer;
    border-radius: 4px;
    outline: none;
    width: 100%;
    
    font-family: Roboto;
    font-weight: 500;
    font-size: 1rem;
    color: #fff;
    border : 2px solid #e63946;
    transition: 200ms ease all;
  }

  @media screen and (max-width: 320px) {
    width: 90%;
  }
`;

export const ModalToSendCodeSolution = styled.div`
  position: fixed;
  z-index: 999;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  
  .close {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    .icon-close {
      cursor: pointer;
    }

    h1 {
      font-size: 16px;
      text-align: center;
    }
  }

  background-color: #202225;
  border-radius: 8px;
  font-family: Roboto;
  color: #fff;
  gap: 22px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 26px 32px;

  max-width: 500px;
  width: 100%;

  button {
    padding: 6px 6px 8px 6px;
    background-color: #6cba6b;
    cursor: pointer;
    border-radius: 4px;
    outline: none;
    width: 100%;
    
    font-family: Roboto;
    font-weight: 500;
    font-size: 1rem;
    color: #fff;
    border : 2px solid #6cba6b;
    transition: 200ms ease all;
  }

  .code {
    outline: none;
    resize: none;
    background-color: #25282b;
    border: none;
    border-radius: 8px;
    padding: 20px;
    width: 100%;
    min-height: 200px;
    color: #fff;
    font-size: 16px;
  }

  @media screen and (max-width: 550px) {
    width: calc(90%);
  }
`;

interface PropsMobileNav {
  showNav: boolean
}

export const BackgroundToNavMobile = styled.div<PropsMobileNav>`
  transition: all 300ms ease;
  pointer-events: ${props => props.showNav ? "all" : "none"};;
  opacity: ${props => props.showNav ? 1 : 0};
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 998;
`