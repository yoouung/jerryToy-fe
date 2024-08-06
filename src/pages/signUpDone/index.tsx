import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Box } from '@mui/material';
import { Container, CongratulationsImage } from './styles';

const SignUpDone: React.FC = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/map');
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        축하합니다 🎉
      </Typography>
      <Typography variant="body1" gutterBottom>
        회원가입이 승인되었어요.
      </Typography>
      <Typography variant="body2" gutterBottom>
        자, 이제 땡땡땡을 시작해 볼까요?
      </Typography>
      <CongratulationsImage
        src="src/assets/congratulations_image.png"
        alt="축하 이미지"
      />
      <Button variant="contained" color="primary" onClick={handleStart}>
        네, 좋아요
      </Button>
    </Container>
  );
};

export default SignUpDone;
