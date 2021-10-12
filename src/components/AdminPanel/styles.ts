import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  max-height: 100vh;
  padding: 20px;
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 20px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  gap: 20px;
`;