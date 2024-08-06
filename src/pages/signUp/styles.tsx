import styled from 'styled-components';
import { Button, Box } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  padding-top: 32px;
  position: relative;
`;

export const StepperContainer = styled(Box)`
  width: 100%;
  padding-bottom: 24px;
`;

export const SelectionButton = styled(Button)`
  margin: 8px;
`;

export const NextButton = styled(Button)`
  width: 120px;
`;

export const PrevButton = styled(Button)`
  width: 120px;
`;

export const ButtonContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
`;
