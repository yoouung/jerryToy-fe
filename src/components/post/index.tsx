import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, IconButton, Button } from '@mui/material';
import {
  Favorite,
  LocationOn,
  CalendarToday,
  Visibility,
} from '@mui/icons-material';
import { Post } from './types';
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
import axios from 'axios';
import TransferList from './transferList';
// 목업 데이터
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

const PostDetail: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [likeList, setLikeList] = useState<any[]>([]);
  const [checked, setChecked] = useState<string[]>([]);
  const [showTransferList, setShowTransferList] = useState(false);

  useEffect(() => {
    // API 호출 대신 목업 데이터 사용
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
        const response = await axios.get(`/api/like/${postId}`);
        setLikeList(response.data);
        setShowTransferList(true);
      } catch (error) {
        console.error('좋아요 목록 로드 실패:', error);
      }
    } else {
      setShowTransferList(false);
    }
  };

  const handleChat = () => {
    // 채팅 화면으로 이동
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
          <Typography variant="subtitle1">{post.user.nickname}</Typography>
          <Typography variant="body2">{post.user.age}세</Typography>
          <Typography variant="body2">{post.user.mbti}</Typography>
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
          <Typography variant="body2">{post.likes} 좋아요</Typography>
        </ActionsContainer>
        {showTransferList && (
          <TransferListContainer>
            <TransferList
              items={likeList}
              checked={checked}
              setChecked={setChecked}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleChat}
              disabled={checked.length !== 1}
            >
              채팅하기
            </Button>
          </TransferListContainer>
        )}
      </PostContainer>
    </Container>
  );
};

export default PostDetail;
