import styled from 'styled-components';

export const ChatListContainer = styled.div`
  border-right: 1px solid #ebe7fb;
  padding: 0 40px 0 0px;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchWrap = styled.div`
  background-color: #e6e5ea;
  border-radius: 5px;
  display: flex;

  input {
    background-color: transparent;
    border: none;
    padding: 15px 15px;
    outline: none;
    width: 80%;
  }

  .search-btn {
    height: 46px;
    border: none;
    background-color: transparent;
    outline: none;
    width: 20%;
    cursor: pointer;
    font-size: 20px;
  }
`;

export const ChatListItemsContainer = styled.div`
  margin-top: 30px;
  overflow: auto;
  max-height: calc(100vh - calc(100vh / 2));
`;

export const ChatListItemContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #ebe7fb;
  padding-bottom: 10px;
  margin-top: 10px;
  cursor: pointer;
  padding: 10px 10px 10px 20px;
  transition: all 0.3s cubic-bezier(0.88, 0.19, 0.37, 1.11);
  transform: scale(0);
  animation-name: showIn;
  animation-duration: 0.2s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-timing-function: cubic-bezier(0.88, 0.19, 0.37, 1.11);
  animation-fill-mode: both;
  animation-delay: 0.1s;

  &.active {
    background: #fff;
    border-radius: 10px;
  }

  &:first-child {
    margin-top: 0;
  }
`;

export const AvatarContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
  position: relative;
`;

export const AvatarImage = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 50%;

  img {
    max-width: 200%;
    object-fit: cover;
  }
`;

export const OnlineStatus = styled.span`
  position: absolute;
  width: 10px;
  height: 10px;
  bottom: 0;
  right: 0;
  background-color: #ddd;
  border-radius: 50%;
  border: 2px solid #fff;

  &.active {
    background-color: tomato;
  }
`;

export const UserMeta = styled.div`
  p {
    margin: 0;
    padding: 0;
    color: #000;
    font-weight: 600;
    font-size: 14px;
  }

  span {
    margin: 0;
    padding: 0;
    color: #ceccd3;
    font-weight: 400;
    font-size: 12px;
    display: block;
  }
`;
