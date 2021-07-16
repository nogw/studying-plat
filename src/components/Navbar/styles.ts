import styled from 'styled-components';

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

      &:active {
        filter: brightness(0.8);
        transform: rotate(180deg);
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

interface PropsMobileNav {
  showNav: boolean
}

export const MobileNav = styled.div<PropsMobileNav>`
  transition: all 300ms ease;
  transform: ${props => props.showNav ? "translateX(0px)" : "translateX(calc(100% + 20px))"};
  
  display: flex;
  flex-direction: column;

  background-color: #202225;
  border-radius: 6px;

  margin: 20px 20px 20px 20px;
  padding: 20px;
  z-index: 999;
  gap: 12px;
  
  position: fixed;
  right: 0px;
  left: 0px;
  top: 0px;

  .icon {
    cursor: pointer;
    color: #fff;
    font-size: 26px;
    margin-bottom: 8px;
    margin-left: auto;
    transform: rotate(180deg);

    &:active {
      filter: brightness(0.8);
      transform: rotate(0deg);
    }
  }

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

export const BackgroundToNavMobile = styled.div<PropsMobileNav>`
  transition: all 300ms ease;
  pointer-events: ${props => props.showNav ? "all" : "none"};;
  opacity: ${props => props.showNav ? 1 : 0};
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 998;
`