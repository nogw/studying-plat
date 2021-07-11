import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-self: center;
  width: 100vw;
  margin-bottom: 20px;
  
  .box {
    flex: 1;
  }
  
  .title {
    display: flex;
    align-items: center;

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
    gap: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .profile {
    background-color: #202225;
    border-radius: 50%;
    height: 36px;
    width: 36px;
    margin-left: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 16px;
      color: #fff;
    }
  }
`;

interface NavBtnProps {
  active: boolean
}

export const NavBtn = styled.div<NavBtnProps>`
  a {
    background-color: ${props => props.active ? "#768BD4" : "#202225"};
    border-radius: 8px;
    padding: 8px 16px;
    color: #fff;
    font-size: 14px;
    text-decoration: none;
    font-weight: bold;
  }
`;

export const Icon = styled.div`
  background-color: #202225;
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
