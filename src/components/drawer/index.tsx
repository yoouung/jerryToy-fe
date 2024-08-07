import React, { useEffect, useState } from 'react';
import { Divider, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Drawer, CategoryList, DrawerHeader, CategoryItem } from './styles';
import ListComponent from '../list';
import { Tag } from '@/types';
import { ButtonTagStyle } from '../floatTags/styles';
import Footer from './footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface DrawerComponentProps {
  tagList: Tag[];
  selectedTags?: Tag[];
  data: any;
  isClicked?: boolean;
  destId?: number;
  onClose?: () => void;
}

const DrawerComponent: React.FC<DrawerComponentProps> = ({
  tagList,
  selectedTags,
  data,
  isClicked,
  destId,
  onClose,
}) => {
  const [posts, setPosts] = useState(data);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tags, setTags] = useState(tagList);
  const baseUrl = new URL(window.location.href).origin;

  const navigate = useNavigate();

  useEffect(() => {
    setPosts(data);
  }, [data]);

  useEffect(() => {
    if (isClicked) {
      setDrawerOpen(isClicked);
    }
  }, [isClicked]);

  useEffect(() => {
    if (destId !== undefined) {
      const filteredPosts = data.filter(
        (post: any) => post.dest.destId === destId
      );
      setPosts(filteredPosts);
    }
  }, [destId]);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setDrawerOpen(open);
      if (!open) {
        if (onClose) {
          onClose();
        }
      }
    };

  const handleRemoveCategory = (index: number, event: React.MouseEvent) => {
    event.stopPropagation();
    setTags(tags.filter((_, i) => i !== index));
  };

  useEffect(() => {
    console.log(selectedTags);

    if (selectedTags && selectedTags.length === 0) {
      // getAllPosts();
    } else if (selectedTags) {
      const tagNames = selectedTags.map((tag) => tag.name);
      // getPostsByTag(tagNames);
    }
  }, [selectedTags]);

  // const getAllPosts = async () => {
  //   const { data } = await axios.get(`${baseUrl}/api/post/all`);
  //   setPosts(data);
  // };

  // const getPostsByTag = async (tags: string[]) => {
  //   const { data } = await axios.post(`${baseUrl}/api/post/all`, tags);
  //   setPosts(data);
  // };

  const renderTags = (tagsToRender: Tag[]) =>
    tagsToRender.map((tag, index) => (
      <CategoryItem key={tag.tag}>
        <span>{tag.name}</span>
        <IconButton
          size="small"
          edge="end"
          aria-label="delete"
          onClick={(event) => handleRemoveCategory(index, event)}
        >
          <ClearIcon fontSize="small" />
        </IconButton>
      </CategoryItem>
    ));

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <DrawerHeader>
        🍊 제주행괌
        <div onClick={onClose}>
          <ChevronLeftIcon />
        </div>
      </DrawerHeader>
      <CategoryList>
        {selectedTags &&
          (selectedTags.length === 0
            ? renderTags(tags)
            : renderTags(selectedTags))}
      </CategoryList>
      <Divider />
      <ListComponent posts={posts} onPostClick={() => navigate('/post')} />
      <Divider />
      <Footer />
    </div>
  );

  return (
    <div>
      <ButtonTagStyle onClick={toggleDrawer(true)}>
        <MenuIcon
          style={{ width: '10px', height: '10px', marginRight: '3px' }}
        />
        조회
      </ButtonTagStyle>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
};

export default DrawerComponent;
