import styled from 'styled-components';

export const Container = styled.div`
  background-color: #202225;
  padding: 12px;
  border-radius: 8px;
  overflow: hidden;

  .challenges {
    height: 100%;
    display: flex;
    overflow: auto;
    gap: 12px;
    flex-direction: column;
  }

  @media screen and (max-width: 750px) {
    min-height: 500px;
  }
`;

export const PopUpChallenge = styled.div`
  z-index: 999;
  position: fixed;
  width: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #202225;
  padding: 20px;
  border-radius: 6px;

  h1, h2 {
    background-color: #25282b;
    padding: 12px;
    word-wrap: break-word;
    font-family: "Roboto Mono";
    font-size: 16px;
    color: #a7a7a9;
  }

  h2 {
    margin-top: 12px;
    margin-bottom: 32px;
  }

  .bts {
    display: flex;
    margin-top: 12px;
    gap: 12px;

    .button {
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
    .approve:hover {
      color: #6cba6b;
      border : 2px solid #6cba6b;
    }
    .reject:hover {
      color: #e63946;
      border : 2px solid #e63946;
    }
  }
`;

export const ItemListS = styled.div`
  display: flex;

  .square {
    background-color: #768BD4;
    height: 36px;
    width: 36px;
    border-radius: 12px;
    margin-right: 10px;
  }

  .texts {
    h2, h5 {
      color: #fff;
      font-family: "Roboto Mono";
    }

    h2 {
      font-size: 12px;
    }

    h5 {
      font-size: 12px;
      color: #e1e1e1;
    }
  }
`;