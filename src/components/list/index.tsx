import React from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { PostItem, PostTag, PostSubtitle, PostInfo } from './styles';

interface Post {
  postId: number;
  title: string;
  content: string;
  user: {
    userId: number;
    nickname: string;
  };
  dest: {
    destName: string;
    label: string;
  };
  location: string;
}

interface ListComponentProps {
  posts: Post[];
  onPostClick: () => void;
}

const ListComponent: React.FC<ListComponentProps> = ({ posts }) => {
  function onPostClick(): React.MouseEventHandler<HTMLDivElement> | undefined {
    throw new Error('Function not implemented.');
  }

  return (
    <List
      style={{
        height: '510px',
        overflow: 'scroll',
      }}
    >
      {posts.map((post) => (
        <PostItem
          key={post.postId}
          disablePadding
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            margin: '5px 0',
          }}
        >
          <PostTag>{post.dest.label}</PostTag>
          <ListItemButton
            disableRipple
            sx={{ '&:hover': { backgroundColor: 'transparent' } }}
            onClick={onPostClick()}
          >
            <ListItemText
              primary={post.title}
              secondary={
                <PostSubtitle>
                  {post.content.substring(0, 20)}
                  {post.content.length > 20 ? '...' : ''}
                </PostSubtitle>
              }
            />
          </ListItemButton>
          <PostInfo>
            <span>{post.location}</span>
          </PostInfo>
        </PostItem>
      ))}
    </List>
  );
};

export default ListComponent;
