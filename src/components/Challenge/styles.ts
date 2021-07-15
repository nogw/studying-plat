import styled from 'styled-components';

export const Container = styled.div`
  background-color: #202225;
  border-radius: 8px;
  padding: 20px 20px;
  margin-bottom: 0px;
  width: 600px;
  color: #fff;
  font-family: "Roboto Mono";
  display: flex;
  flex-direction: column;
  gap: 18px;

  h1 {
    font-size: calc(24px + 6 * ((100vw - 600px) / 2000));
  }

  p {
    font-size: calc(14px + 6 * ((100vw - 600px) / 2000));
  }

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;
