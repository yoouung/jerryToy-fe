import styled from 'styled-components';
import { Drawer as MuiDrawer } from '@mui/material';

export const Drawer = styled(MuiDrawer)`
  .MuiDrawer-paper {
    width: 240px;
  }
`;

export const DrawerHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  font-size: 18px;
  font-weight: bold;

  div {
    cursor: pointer;
  }
`;

export const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

export const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f1f1f1;
  border-radius: 16px;
  padding: 5px 10px;
  margin: 5px;
  white-space: nowrap;

  span {
    margin-right: 8px;
  }

  button {
    padding: 0;
  }
`;

export const FooterStyle = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 50px;
  margin-right: 20px;
  color: #222222;
`;
