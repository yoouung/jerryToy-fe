import React, { useEffect, useState } from 'react';
import { Divider, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, CategoryList, DrawerHeader, CategoryItem } from './styles';
import ListComponent from '../list';
import { Tag } from '@/types';
import { ButtonTagStyle } from '../floatTags/styles';

interface DrawerComponentProps {
  tagList: Tag[];
  selectedTags: Tag[];
}

const DrawerComponent: React.FC<DrawerComponentProps> = ({
  tagList,
  selectedTags,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tags, setTags] = useState(tagList);

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
    };

  const handleRemoveCategory = (index: number, event: React.MouseEvent) => {
    event.stopPropagation(); // 이벤트 전파를 막음
    setTags(tags.filter((_, i) => i !== index));
  };

  const posts = [
    {
      tag: '교육',
      title: '영어회화 학원을 다니고 싶은데',
      subtitle: '기초부터 차근차근 잘 알려주는 학원 있을까요?',
      location: '망우제3동',
      time: '7분 전',
    },
    {
      tag: '일반',
      title: '동네에 친구가 없으니 너무 심심해요ㅠㅠ',
      subtitle: '동네친구 하실분 있나요? 까페가서 수다떨거...',
      location: '망우본동',
      time: '6시간 전',
      views: 122,
    },
    {
      tag: '이벤트',
      title: '찾아라! 투명한 페트병',
      subtitle: '코카-콜라와 당근에서 준비한 선물을 드려요!',
      location: '망우제3동',
    },
    {
      tag: '자기계발',
      title: '온라인셀러들의 친목방',
      subtitle: '현재 온라인 판매하면서 혼자 헤쳐나가기가 ...',
      location: '갈매동',
      time: '6시간 전',
      members: 6,
    },
  ];

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
      <DrawerHeader>망우제3동</DrawerHeader>
      <CategoryList>
        {selectedTags.length === 0
          ? renderTags(tags)
          : renderTags(selectedTags)}
      </CategoryList>
      <Divider />
      <ListComponent posts={posts} onPostClick={navigateToPost} />
    </div>
  );

  const navigateToPost = () => {
    navigate('/post');
  };

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
