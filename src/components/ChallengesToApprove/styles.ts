import styled from 'styled-components';

export const Container = styled.div`
  background-color: #202225;
  padding: 12px;
  border-radius: 8px;
  height: 100%;

  .challenges {
    height: 100%;
    display: flex;
    overflow: auto;
    gap: 12px;
    flex-direction: column;
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