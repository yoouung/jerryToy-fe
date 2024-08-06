import styled, { keyframes } from 'styled-components';

const showIn = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

export const ChatContentContainer = styled.div`
  flex-grow: 1;
  padding: 20px 40px;
  max-width: 100%;
  border-right: 1px solid #ebe7fb;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #ebe7fb;

  .current-chatting-user {
    display: flex;
    align-items: center;
  }

  .current-chatting-user p {
    margin: 0;
    font-weight: 600;
  }
`;

export const Body = styled.div`
  max-height: calc(100vh - calc(100vh / 2));
  overflow: auto;

  .chat__items {
    display: flex;
    flex-direction: column;
  }
`;

export const Footer = styled.div`
  padding-top: 30px;
`;

export const SendNewMessage = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 8px;

  button {
    width: 36px;
    height: 36px;
    background-color: #ecefff;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: #4665ff;
    padding: 0;
    border-radius: 5px;
    transition: all 0.3s cubic-bezier(0.88, 0.19, 0.37, 1.11);
  }

  button:hover {
    transform: scale(1.2);
  }

  input {
    flex-grow: 1;
    padding: 0 15px;
    background-color: transparent;
    border: none;
  }

  .btnSendMsg {
    background-color: #3b5bfe;
    color: #fff;
  }
`;

export const AvatarContainer = styled.div`
  margin-right: 20px;
  background: #fff;
  padding: 1px;
  border-radius: 50%;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const ChatItemContent = styled.div`
  background-color: #4462ff;
  color: #fff;
  padding: 15px;
  border-radius: 10px 10px 0 10px;
  max-width: 50%;
  min-width: 215px;
`;

export const ChatItemMeta = styled.div`
  justify-content: space-between;
  display: flex;
  margin-top: 10px;

  span {
    font-size: 14px;
    color: #8693d3;
  }
`;

export const ChatItemContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-bottom: 15px;
  transition: all 0.3s ease;
  transform: scale(0);
  transform-origin: right;
  animation: ${showIn} 0.2s cubic-bezier(0.88, 0.19, 0.37, 1.11) both;
  animation-delay: 0.2s;

  &.other {
    flex-direction: row-reverse;
    transform-origin: left;

    ${AvatarContainer} {
      margin-left: 20px;
      margin-right: 0;
    }

    ${ChatItemContent} {
      background-color: #fff;
      color: #000;
      border-radius: 10px 10px 10px 0;
    }

    ${ChatItemMeta} span {
      color: #d1d1d1;
    }
  }
`;
