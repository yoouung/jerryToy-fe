import React from 'react';
import { List, ListItemButton } from '@mui/material';
import { PostItem, PostTag } from './styles';
import { Post } from '../post/types';

interface ListComponentProps {
  posts: Post[];
  onPostClick: () => void;
}

const ListComponent: React.FC<ListComponentProps> = ({
  posts,
  onPostClick,
}) => {
  console.log(posts);

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
            onClick={onPostClick}
          >
            {/* Other content */}
          </ListItemButton>
        </PostItem>
      ))}
    </List>
  );
};

export default ListComponent;
