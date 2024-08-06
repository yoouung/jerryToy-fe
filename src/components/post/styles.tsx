import { styled } from '@mui/system';
import { Favorite } from '@mui/icons-material';

export const PostContainer = styled('div')`
  padding: 20px;
  margin: 20px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
`;

export const UserInfo = styled('div')`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const DestInfo = styled('div')`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ActionsContainer = styled('div')`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

export const FavoriteIcon = styled(Favorite)<{ liked: boolean }>`
  color: ${(props) => (props.liked ? 'red' : 'gray')};
`;

export const ContentContainer = styled('div')`
  margin-top: 20px;
  margin-bottom: 20px;
  word-wrap: break-word;
  white-space: pre-wrap;
`;

export const MetaData = styled('div')`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;

export const MetaItem = styled('div')`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const TransferListContainer = styled('div')`
  margin-top: 20px;
`;
