import styled from 'styled-components';
import { Box } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 16px;
  padding-top: 200px;
`;

export const CongratulationsImage = styled.img`
  margin: 16px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;
