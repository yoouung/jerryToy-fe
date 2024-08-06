import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, IconButton, Button } from '@mui/material';
import {
  Favorite,
  LocationOn,
  CalendarToday,
  Visibility,
} from '@mui/icons-material';
import axios from 'axios';
import {
  PostContainer,
  UserInfo,
  DestInfo,
  ActionsContainer,
  FavoriteIcon,
  ContentContainer,
  MetaData,
  MetaItem,
  TransferListContainer,
} from './styles';
import TransferList from './transferList';
import { Post } from './types';

// Mock data
const mockPost: Post = {
  postId: 1,
  user: {
    userId: 1,
    nickname: '홍길동',
    age: 25,
    mbti: 'INTJ',
    gender: '남성',
    regDate: '2023-01-01',
    recent_match: '2023-02-01',
    count: 10,
    degree: 2.5,
  },
  dest: {
    destId: 1,
    destName: '제주도',
    label: '여행',
    address: '제주도 어딘가',
    roadaddress: '제주도 어딘가의 도로명',
    latitude: 33.450701,
    longitude: 126.570667,
    tagList: ['자연', '휴식'],
  },
  title: '제주도 탐방기',
  content: '제주도는 정말 아름다운 곳입니다...',
  postDate: '2023-08-01',
  tag: '여행',
  likes: 20,
  views: 100,
  people: 2,
};

const mockLikedUsers = [
  { userId: 1, nickname: '유저1', mbti: 'INTJ', age: 25 },
  { userId: 2, nickname: '유저2', mbti: 'ENTP', age: 22 },
  { userId: 3, nickname: '유저3', mbti: 'INFJ', age: 30 },
];

const PostDetail: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [likeList, setLikeList] = useState<any[]>(mockLikedUsers);
  const [checked, setChecked] = useState<string[]>([]);
  const [showTransferList, setShowTransferList] = useState(false);

  useEffect(() => {
    // API call replaced with mock data
    const fetchPost = async () => {
      setPost(mockPost);
      setLoading(false);
    };

    fetchPost();
  }, [postId]);

  const handleLike = async () => {
    setLiked(!liked);
    if (!liked) {
      try {
        // const response = await axios.get(`/api/like/${postId}`);
        // setLikeList(response.data);
        setLikeList(mockLikedUsers); // Mock data
        setShowTransferList(true);
      } catch (error) {
        console.error('Failed to load like list:', error);
      }
    } else {
      setShowTransferList(false);
    }
  };

  const handleChat = () => {
    // Navigate to chat screen
    navigate('/chat');
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h6">로딩 중...</Typography>
      </Box>
    );
  }

  if (!post) {
    return <Typography variant="h6">게시글을 찾을 수 없습니다.</Typography>;
  }

  return (
    <Container maxWidth="md" sx={{ paddingTop: '20px' }}>
      <PostContainer>
        <Typography variant="h4" component="div" gutterBottom>
          {post.title}
        </Typography>
        <UserInfo>
          <Box component="span" sx={{ marginRight: 2 }}>
            <Typography variant="subtitle1" component="div">
              {post.user.nickname}
            </Typography>
          </Box>
          <Box component="span" sx={{ marginRight: 2 }}>
            <Typography variant="body2" component="div">
              {post.user.age}세
            </Typography>
          </Box>
          <Box component="span">
            <Typography variant="body2" component="div">
              {post.user.mbti}
            </Typography>
          </Box>
        </UserInfo>
        <ContentContainer>
          <Typography variant="body1" gutterBottom>
            {post.content}
          </Typography>
        </ContentContainer>
        <DestInfo>
          <LocationOn color="action" />
          <Typography variant="body2">{post.dest.destName}</Typography>
        </DestInfo>
        <MetaData>
          <MetaItem>
            <CalendarToday color="action" />
            {post.postDate}
          </MetaItem>
          <MetaItem>
            <Visibility color="action" />
            {post.views} 조회수
          </MetaItem>
        </MetaData>
        <ActionsContainer>
          <IconButton onClick={handleLike}>
            <FavoriteIcon liked={liked} />
          </IconButton>
          <Typography variant="body2">{post.likes}</Typography>
        </ActionsContainer>
        {showTransferList && (
          <>
            <TransferListContainer>
              <TransferList
                items={likeList}
                checked={checked}
                setChecked={setChecked}
              />
            </TransferListContainer>
            <Button
              variant="contained"
              color="primary"
              onClick={handleChat}
              disabled={checked.length !== 1}
            >
              채팅하기
            </Button>
          </>
        )}
      </PostContainer>
    </Container>
  );
};

export default PostDetail;
