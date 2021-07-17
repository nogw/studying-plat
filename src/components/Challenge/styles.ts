import styled from 'styled-components';

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
  
  /* margin-bottom: 100px; */
  
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
      color: #90be6d;
      border : 2px solid #90be6d;
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
  
  background-color: #202225;
  border-radius: 16px;
  font-family: Roboto;
  color: #fff;
  gap: 22px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 26px;
  width: 310px;

  h1 {
    font-size: 16px;
    text-align: center;
  }

  button {
    padding: 8px 8px 9px 8px;
    background-color: transparent;
    cursor: pointer;
    border-radius: 4px;
    outline: none;
    width: 80%;
    
    font-family: Roboto;
    color: #e63946;
    border : 2px solid #e63946;
    font-weight: 900;
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
  
  background-color: #202225;
  border-radius: 16px;
  font-family: Roboto;
  color: #fff;
  gap: 22px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 26px;
  width: 410px;

  h1 {
    font-size: 16px;
    text-align: center;
  }

  button {
    padding: 8px 8px 9px 8px;
    background-color: transparent;
    cursor: pointer;
    border-radius: 4px;
    outline: none;
    width: 80%;
    
    font-family: Roboto;
    color: #90be6d;
    border : 2px solid #90be6d;
    font-weight: 900;
    transition: 200ms ease all;
  }

  .code {
    outline: none;
    width: 100%;
  }

  @media screen and (max-width: 450px) {
    width: 90%;
  }
`;