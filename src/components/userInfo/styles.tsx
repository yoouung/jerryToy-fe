import styled from 'styled-components';

export const UserInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
`;

export const CardContainer = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 600px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;
