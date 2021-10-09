import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
  
  .box {
    flex: 1;
  }

  .box.last {
    display: flex;
    align-items: center;
    gap: 20px;
    
    .navbtn {
      display: none;
      align-items: center;
      
      .icon {
        cursor: pointer;
        color: #fff;
        font-size: 26px;
      }

      .icon-close {
        font-size: 26px;
        cursor: pointer;
        z-index: 995;
        color: #fff;
      }
    }

    @media screen and (max-width: 640px) {
      .navbtn {
        display: flex;
      }
    }
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
    border-radius: 12px;
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

  @media screen and (max-width: 640px) {
    .nav {
      display: none;
    }
  }
`;

interface NavBtnProps {
  active: boolean
}

export const NavBtn = styled.div<NavBtnProps>`
  a {
    white-space: nowrap; 
    background-color: ${props => props.active ? "#768BD4" : "#202225"};
    border-radius: 8px;
    padding: 8px 16px;
    color: #fff;
    font-size: 14px;
    text-decoration: none;
    font-weight: bold;
  }
`;

export const NavBtnMbl = styled.div<NavBtnProps>`
  width: 100%;
  background-color: ${props => props.active ? "#768BD4" : "#25282b"};
  border-radius: 6px;
  padding: 10px 16px;
  border: 2px solid #25282b;

  display: flex;
  justify-content: center;

  color: #fff;
  font-size: 14px;
  text-decoration: none;
  font-weight: bold;

  &:active {
    border: 2px solid #768BD4
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

export const ContainerNav = styled.div`
  display: flex;
  position: fixed;
  padding: 12px 28px;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  z-index: 994;
`;

const baseListStyle = css`
  list-style: none;
  width: fit-content;
  font-weight: bold;
  
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  cursor: pointer;

  font-family: "Roboto Mono";
  font-weight: bold;
  font-size: 35px;
  position: relative;
  overflow: hidden;
  color: #fff;
  transition: all 400ms ease;
  
  &:hover {
    color: #768BD4;
  }

  @media screen and (max-width: 605px) {
    margin-left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    font-size: 32px;
  }

  @media screen and (max-width: 450px) {
    font-size: 24px;
  }
`;

export const ListItem = styled.h1`
  ${baseListStyle}
`;

export const LinkRedirect = styled.div`
  ${baseListStyle}
`;

type ContainerProps = {
  show: boolean
}

export const List = styled(motion.div)<ContainerProps>`
  display: ${props => props.show ? "flex" : "none"};
  justify-content: center;
  flex-direction: column;
  width: 100%;
  z-index: 999;
  gap: 42px;
  margin-left: 24px;
  
  @media screen and (max-width: 605px) {
    margin-left: 0px;
  }
`;

export const Bgc = styled(motion.div)`
  background-color: rgba(0,0,0,0.9);
  position: fixed;
  z-index: 295;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;