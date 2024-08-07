import { Drawer as MuiDrawer } from '@mui/material';
import styled from 'styled-components';

interface TagStyleProps {
  isSelected?: boolean;
}

export const TagStyle = styled.div<TagStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  padding: 6px 9px;
  background-color: ${(props) =>
    props.isSelected ? 'var(--inactive-button-color)' : 'white'};
  border: 1px solid #e0e0e0;
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 11px;
  color: #222222;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const ButtonTagStyle = styled(TagStyle).attrs({ as: 'button' })`
  border: none;
  outline: none;
  background-color: var(--active-button-color);
`;

export const FloatTagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  z-index: 1000;
  position: absolute;
  height: 50px;
  top: 0;
`;

export const Drawer = styled(MuiDrawer)`
  .MuiDrawer-paper {
    width: 240px;
  }
`;

export const DrawerHeader = styled.div`
  padding: 16px;
  font-size: 18px;
  font-weight: bold;
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
