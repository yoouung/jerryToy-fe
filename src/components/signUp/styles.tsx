import styled from 'styled-components';
import { Button, Box } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const SelectionButton = styled(Button)`
  margin: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

export const StepperContainer = styled.div`
  width: 100%;
  padding: 20px;
`;
