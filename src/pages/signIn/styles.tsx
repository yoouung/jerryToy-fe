import styled from 'styled-components';
import { Button, Box } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 16px;
`;

export const SelectionButton = styled(Button)`
  margin: 8px;
`;

export const NextButton = styled(Button)`
  margin-top: 16px;
`;

export const PrevButton = styled(Button)`
  margin-top: 16px;
`;

export const ButtonContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 16px;
`;
