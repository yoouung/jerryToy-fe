import styled from 'styled-components';
import Router from './Router';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const App = () => {
  return (
    <Container>
      <Router />
    </Container>
  );
};

export default App;
