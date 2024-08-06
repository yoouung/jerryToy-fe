import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Slider,
  Grid,
  Divider,
  CircularProgress,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  Male as MaleIcon,
  Female as FemaleIcon,
  CalendarToday as CalendarIcon,
  WbSunny as TemperatureIcon,
  TravelExplore as TravelIcon,
  AccessTime as RecentIcon,
  InsertEmoticon as EmoticonIcon,
  Face as FaceIcon,
} from '@mui/icons-material';
import { UserInfoContainer, BackgroundImage, CardContainer } from './styles';
import cover from '../../assets/background.jpg';
import axios from 'axios';

interface UserInfoType {
  userId: number;
  nickname: string;
  age: number;
  mbti: string;
  gender: string;
  regDate: string;
  recent_match: string;
  count: number;
  degree: number;
}

const UserInfo: React.FC<{ userId: string }> = ({ userId }) => {
  const [userInfo, setUserInfo] = useState<UserInfoType | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/user/${userId}`
        );
        setUserInfo(response.data);
      } catch (error) {
        console.error('Failed to fetch user information:', error);
      }
    };

    fetchUserInfo();
  }, [userId]);

  if (!userInfo) {
    return (
      <UserInfoContainer>
        <CircularProgress />
      </UserInfoContainer>
    );
  }

  return (
    <UserInfoContainer>
      <BackgroundImage src={cover} alt="background" />
      <CardContainer>
        <Card
          sx={{
            width: '100%',
            maxWidth: 600,
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
          }}
        >
          <CardHeader
            avatar={
              <Avatar
                src={`https://via.placeholder.com/150?text=${userInfo.nickname}`}
                sx={{ width: 56, height: 56 }}
              />
            }
            title={
              <Typography variant="h5" component="div">
                {userInfo.nickname}
              </Typography>
            }
            subheader={
              <Box display="flex" alignItems="center">
                <CalendarIcon fontSize="small" />
                <Typography variant="body2" ml={0.5}>
                  가입일:{' '}
                  {new Date(userInfo.regDate).toLocaleDateString('ko-KR')}
                </Typography>
              </Box>
            }
            action={
              <Tooltip title="사용자 정보">
                <IconButton>
                  <FaceIcon />
                </IconButton>
              </Tooltip>
            }
          />
          <CardContent>
            <Box mb={2}>
              <Typography variant="h6" gutterBottom>
                사용자 정보
              </Typography>
              <Divider />
              <Grid container spacing={2} mt={2}>
                <Grid item xs={12} sm={6}>
                  <Box display="flex" alignItems="center">
                    {userInfo.gender === '남성' ? <MaleIcon /> : <FemaleIcon />}
                    <Typography variant="body1" ml={0.5}>
                      성별: {userInfo.gender}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" mt={1}>
                    <FaceIcon />
                    <Typography variant="body1" ml={0.5}>
                      나이: {userInfo.age}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" mt={1}>
                    <EmoticonIcon />
                    <Typography variant="body1" ml={0.5}>
                      MBTI: {userInfo.mbti}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box display="flex" alignItems="center">
                    <TravelIcon />
                    <Typography variant="body1" ml={0.5}>
                      동행 횟수: {userInfo.count}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" mt={1}>
                    <RecentIcon />
                    <Typography variant="body1" ml={0.5}>
                      최근 동행:
                    </Typography>
                  </Box>
                  <Typography variant="body1" ml={4}>
                    {new Date(userInfo.recent_match).toLocaleDateString(
                      'ko-KR'
                    )}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box mt={3}>
              <Box display="flex" alignItems="center" mb={1}>
                <TemperatureIcon />
                <Typography variant="body1" ml={0.5}>
                  온도
                </Typography>
              </Box>
              <Slider
                value={userInfo.degree}
                min={0}
                max={100}
                valueLabelDisplay="auto"
                aria-labelledby="temperature-slider"
                sx={{ color: '#ff5722' }}
              />
            </Box>
          </CardContent>
        </Card>
      </CardContainer>
    </UserInfoContainer>
  );
};

export default UserInfo;
