import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 390px;
  height: 100vh;
`;

const OutLetContainer = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default OutLetContainer;
