import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  h1 {
    color: #fff;
    font-size: 18px;
    font-family: "Roboto Mono";
    margin-top: 14px;
  }
  
  .icon { 
    background-color: #768BD4;
    height: 140px;
    width: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;

    h2 {
      color: #fff;
      font-size: 40px;
    }
  }
`;
