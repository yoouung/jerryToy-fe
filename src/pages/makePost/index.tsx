import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  TextField,
  Button,
  MenuItem,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { Tag } from '@/types';

const tags: Tag[] = [
  { tag: '숙박', name: '숙박' },
  { tag: '음식점', name: '음식점' },
  { tag: '테마여행', name: '테마여행' },
  { tag: '관광지', name: '관광지' },
  { tag: '축제/행사', name: '축제/행사' },
  { tag: '쇼핑', name: '쇼핑' },
];

const PostCreatePage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [destName, setDestName] = useState('');
  const [label, setLabel] = useState('');
  const [content, setContent] = useState('');
  const [locations, setLocations] = useState<any[]>([]);

  useEffect(() => {
    if (label) {
      const baseUrl = new URL(window.location.href).origin;
      axios
        .get(`${baseUrl}/api/dest/${label}`)
        .then((response) => {
          setLocations(response.data.list);
        })
        .catch((error) => {
          console.error('위치 정보 가져오기 오류:', error);
        });
    } else {
      setLocations([]);
    }
  }, [label]);

  const handleSelectLocation = (place: any) => {
    setDestName(place.destName);
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        title,
        content,
        destName,
        tagList: [label],
      };
      const baseUrl = new URL(window.location.href).origin;
      const response = await axios.post(`${baseUrl}/api/post/submit`, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('게시글 작성 완료:', response.data);
    } catch (error) {
      console.error('게시글 작성 오류:', error);
    }
  };

  const handleLabelChange = (event: SelectChangeEvent<string>) => {
    setLabel(event.target.value);
    setDestName('');
  };

  return (
    <Container maxWidth="sm" sx={{ paddingTop: '100px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        게시글 작성
      </Typography>
      <TextField
        label="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>라벨</InputLabel>
        <Select value={label} onChange={handleLabelChange}>
          {tags.map((tag) => (
            <MenuItem key={tag.tag} value={tag.tag}>
              {tag.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>위치 검색 (제주 내)</InputLabel>
        <Select
          value={destName}
          onChange={(e) => {
            const selectedPlace = locations.find(
              (location) => location.destName === e.target.value
            );
            if (selectedPlace) {
              handleSelectLocation(selectedPlace);
            }
          }}
          disabled={!label}
        >
          {locations.map((location) => (
            <MenuItem key={location.destId} value={location.destName}>
              {location.destName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="글"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />
      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          fullWidth
        >
          작성 완료
        </Button>
      </Box>
    </Container>
  );
};

export default PostCreatePage;
