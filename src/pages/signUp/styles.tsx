import styled from 'styled-components';
import { Button, Box } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 330px;
  height: 100vh;
  margin: 0 auto;
  padding-top: 32px;
  position: relative;
`;

export const StepperContainer = styled(Box)`
  width: 100%;
  margin: 30px 0 20px 0;
  padding-bottom: 24px;
`;

export const SelectionButton = styled(Button)`
  margin: 8px;
`;

export const NextButton = styled(Button)`
  width: 170px;
`;

export const PrevButton = styled(Button)`
  width: 170px;
`;

export const ButtonContainer = styled(Box)`
  display: flex;
  position: absolute;
  justify-content: space-between;
  width: 350px;
  top: 600px;
`;
