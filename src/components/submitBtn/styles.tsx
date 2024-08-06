import styled from 'styled-components';

export const SubmitBtnStyle = styled.button<{
  location: string;
  isActive: boolean;
}>`
  width: 330px;
  height: 40px;
  box-sizing: border-box;
  border-radius: 5px;
  color: #fefefe;
  border: none;
  background-color: ${({ isActive }) =>
    isActive ? 'var(--active-button-color)' : 'var(--inactive-button-color)'};
  cursor: ${({ isActive }) => (isActive ? 'pointer' : 'default')};

  ${({ location }) =>
    location === 'next' &&
    `
      @media (max-width: 768px) {
        position: fixed;
        bottom: 20px;
        width: calc(100% - 40px); 
        left: 20px;
      }
    `};
`;
