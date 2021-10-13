import styled from 'styled-components';

export const Container = styled.div`
  background-color: #202225;
  padding: 12px;
  border-radius: 8px;
  min-width: 300px;
  overflow: auto;
  
  h1 {
    color: red;
  }
  
  @media screen and (max-width: 750px) {
    min-height: 500px;
    width: 100%;
  }
`;
