import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  padding: 20px;
  gap: 20px;
  display: flex;

  @media screen and (max-width: 750px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 20px;
`;