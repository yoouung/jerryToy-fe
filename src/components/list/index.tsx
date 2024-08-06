import React from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { PostItem, PostTag, PostSubtitle, PostInfo } from './styles';

interface Post {
  tag: string;
  title: string;
  subtitle: string;
  location: string;
  time?: string;
}

interface ListComponentProps {
  posts: Post[];
  onPostClick: () => void;
}

const ListComponent: React.FC<ListComponentProps> = ({
  posts,
  onPostClick,
}) => {
  return (
    <List>
      {posts.map((post, index) => (
        <PostItem key={index} disablePadding>
          <PostTag>{post.tag}</PostTag>
          <ListItemButton
            disableRipple
            sx={{ '&:hover': { backgroundColor: 'transparent' } }}
            onClick={onPostClick}
          >
            <ListItemText
              primary={post.title}
              secondary={<PostSubtitle>{post.subtitle}</PostSubtitle>}
            />
          </ListItemButton>
          <PostInfo>
            <span>{post.location}</span> <span>· {post.time}</span>
          </PostInfo>
        </PostItem>
      ))}
    </List>
  );
};

export default ListComponent;
