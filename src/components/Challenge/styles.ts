import styled from 'styled-components';

export const Container = styled.div`
  background-color: #202225;
  border-radius: 8px;
  padding: 16px 20px;
  margin-bottom: 20px;
  width: 600px;
  color: #fff;
  font-family: "Roboto Mono";

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;
