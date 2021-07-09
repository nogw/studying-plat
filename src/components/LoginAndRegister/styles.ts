import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .menu {
    width: 100%;
  }
  .menu-primary-enter {
    position: absolute;
    transform: translateX(160px) scale(0);
    opacity: 0;
  }
  .menu-primary-enter-active {
    transform: translateX(0%)  scale(1);
    transition: all 400ms ease;
    opacity: 1;
  }
  .menu-primary-exit {
    position: absolute;
  }
  .menu-primary-exit-active {
    transform: translateX(-60px)  scale(0.9);
    transition: all 400ms ease;
    opacity: 0;
  }
`;  
