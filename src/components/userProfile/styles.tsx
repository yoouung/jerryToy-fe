import styled, { keyframes } from 'styled-components';

const showIn = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

export const UserProfileContainer = styled.div`
  width: 25%;
  padding: 0 20px 0 40px;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  border-radius: 10px;
`;

export const ProfileCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: scale(0);
  animation: ${showIn} 0.2s cubic-bezier(0.17, 0.67, 0.12, 1.53) both;
  animation-delay: 0.3s;
  margin-bottom: 15px;
  padding: 20px;

  &.user__profile__image {
    padding: 20px 20px;
  }
`;

export const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;

  img {
    object-fit: cover;
    max-width: 100%;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  padding: 15px 20px;

  h4 {
    margin: 0;
  }

  i {
    font-size: 20px;
  }
`;

export const CardContent = styled.div`
  border-top: 1px solid #ebe7fb;
  overflow: auto;
  width: 100%;
  padding: 15px 20px;
  color: #6d6a6a;
  font-size: 14px;
  display: none;
  transform-origin: top;
  animation: ${showIn} 0.2s cubic-bezier(0.88, 0.19, 0.37, 1.11) both;
  animation-delay: 0.2s;

  &.open {
    display: block;
  }
`;
