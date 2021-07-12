import styled from 'styled-components';
import { ContainerC } from '../ChallengeItemList/styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 20px;

  h1 {
    color: #fff;
  }
`;

export const ChallengesContainer = styled.div `
  width: 100%;
  h1 {
    font-size: 14px;
    color: #b1b1b1;
    text-transform: capitalize;
    margin-bottom: 8px;
  }
`;

export const ChallengesList = styled.div `
  background-color: #202225;
  width: 600px;
  border-radius: 8px;

  ${ContainerC}:not(:last-child) {
    border-bottom: 1px solid #26282b;
    border-spacing: 20px 20px;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`