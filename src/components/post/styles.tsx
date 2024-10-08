import styled from 'styled-components';
import { Favorite } from '@mui/icons-material';

export const PostContainer = styled.div`
  padding-top: 20px;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
  align-items: center;
`;

export const DestInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: -8px;
`;

export const FavoriteIcon = styled(Favorite)<{ liked: boolean }>`
  color: ${(props) => (props.liked ? 'red' : 'gray')};
`;

export const ContentContainer = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  word-wrap: break-word;
  white-space: pre-wrap;
`;

export const MetaData = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const TransferListContainer = styled.div`
  margin-left: -20px;
`;
