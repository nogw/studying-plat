import styled from 'styled-components';

export const Item = styled.div`
  position: relative;

  .leave {
    margin-left: auto;
    color: #fff;
    border: 2px solid #fff;
    background-color: transparent;
    padding: 4px 6px;
    border-radius: 6px;
    font-size: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: all ease 200ms;
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translate(0%, -50%);

    &:hover {
      border: 2px solid #e63946;
      color: #e63946;
    }
  }
`;

export const Container = styled.div`
  .challenges {
    ${Item}:not(:last-child) {
      border-bottom: 1px solid #26282b;
      border-spacing: 20px 20px;
    }
  }
  
  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

type ItemListProps = {
  status: string | boolean
}

const handleChoiceColor = status => {
  switch (status) {
    case "await":
      return "#e8f26d"
    case "in progress":
      return "#768BD4"
    case false:
      return "#d47676"
    default:
      return "#768BD4"
  }
}

export const ItemList = styled.div<ItemListProps>`
  display: flex;
  align-items: center;
  position: relative;
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
    background-color: ${({ status }) => handleChoiceColor(status)};
    height: 36px;
    width: 36px;
    border-radius: 12px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      color: #26282b;
    }

    .false {
      font-size: 20px;
    }
  }
`;
