import styled from 'styled-components';

interface ContainerProps {
  start: boolean
}

export const ContainerC = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  padding: 12px;
  cursor: pointer;

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

  .circle {
    background-color: #768BD4;
    height: 36px;
    width: 36px;
    border-radius: 12px;
    margin-right: 10px;
  }

  .leave {
    margin-left: auto;
    color: #fff;
    border: 2px solid #fff;
    padding: 4px 6px;
    border-radius: 6px;
    font-size: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: all ease 200ms;

    &:hover {
      border: 2px solid ${props => props.start ? "#e63946" : "#6cba6b"};
      color: ${props => props.start ? "#e63946" : "#6cba6b"};
    }
  }
`;
