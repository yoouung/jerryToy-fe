import React from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';
import {
  PostInfo,
  PostItem,
  PostSubtitle,
  PostTag,
  PostWriter,
} from './styles';
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
        height: '490px',
        maxHeight: '490px',
        overflowY: 'scroll',
      }}
    >
      {posts.map((post) => {
        return (
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
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
              }}
              onClick={onPostClick}
            >
              <ListItemText
                primary={post.title}
                secondary={<PostSubtitle>{post.content}</PostSubtitle>}
              />
              <ListItemText
                secondary={<PostWriter>{post.user.nickname}</PostWriter>}
              />
            </ListItemButton>
            <PostInfo>
              <span>📍 {post.dest.address}</span>
              <span>🗓️ {post.postDate}</span>
            </PostInfo>
          </PostItem>
        );
      })}
    </List>
  );
};

export default ListComponent;
