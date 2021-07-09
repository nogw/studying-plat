import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title {
    display: flex;
    align-items: center;
    border: 1px solid red;

    h1 {
      margin-left: 8px;
      margin-bottom: 4px;
      font-size: 16px;
      font-family: 'Roboto Mono';
      color: #fff;
    }
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 16px;
    border: 1px solid red;

    a {
      background-color: #2b2b2b;
      border-radius: 8px;
      padding: 8px 16px;
      color: #fff;
      font-size: 14px;
      text-decoration: none;
      font-weight: bold;
    }
  }

  .profile {
    background-color: #2b2b2b;
    border-radius: 50%;
    height: 36px;
    width: 36px;
    border: 1px solid red;

    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 14px;
      color: #fff;
    }
  }
`;

export const Icon = styled.div`
  background-color: #2b2b2b;
  border-radius: 10px;
  height: 36px;
  width: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  .pyIcon {
    color: #fff;
    font-size: 20px;
  }
`;