import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    color: #fff;
    font-size: 18px;
    font-family: "Roboto Mono";
    margin-top: 14px;
  }
  
  .user {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .user-icon { 
    background-color: #768BD4;
    height: 140px;
    width: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;

    h2 {
      color: #fff;
      font-size: 40px;
    }
  }

  .achievements {
    display: flex;
    margin-top: 24px;
    gap: 28px;

    .completed, .inProgress {
      display: flex;
      align-items: center;
      flex-direction: column;

      h2 {
        color: #fff;
        font-size: 16px;
        font-family: "Roboto Mono";
        font-weight: 500;
        margin-top: 8px;
      }

      h1 {
        color: #fff;
      }

      .icon {
        font-size: 24px;
      }

      .clock {
        color: #e8f26d;
      }

      .check {
        color: #76d47b;
      }
    }

  }
`;
