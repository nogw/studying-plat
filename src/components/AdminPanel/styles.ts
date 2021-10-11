import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  padding: 20px;
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 20px;
`;

export const Column = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 20px;
`;