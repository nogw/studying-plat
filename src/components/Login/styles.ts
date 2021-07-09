import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 6px;
  padding: 42px;
  box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.2);
  width: 350px;
  z-index: 1;
  margin: 20px;

  @media screen and (max-width: 400px) {
    width: auto;
  }

  button {
    background-color: #768BD4;
    color: #fff;
    border: none;
    width: 100%;
    padding: 12px;
    margin-top: 16px;
    border-radius: 4px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: 200ms all ease;

    &:hover {
      filter: brightness(0.8);
    }
  }

  .registerP {
    color: #686c73;
    font-size: 14px;
    margin-top: 12px;

    span {
      color: #768BD4;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;

interface InputProps {
  error: string
}

export const Input = styled.div<InputProps>`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 18px;

  input {
    margin-top: 6px;
    border: 2px solid ${props => props.error ? "#F04747" : "#202225"};
    background-color: transparent;
    border-radius: 4px;
    padding: 10px 12px;
    width: 100%;
    outline: none;
    transition: 200ms all ease;
    color: #fff;
    font-size: 16px;

    &:focus {
      border: 2px solid #768BD4;
    }
  }

  label {
    color: ${props => props.error ? "#F04747" : "#8F9297"};
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    transition: 200ms all ease;
    display: flex;

    p {
      font-size: 12px;
      margin-left: 2px;
      font-style: italic;
      font-weight: 400;
    }
  }
`;
