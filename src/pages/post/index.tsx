import React, { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  Button,
  MenuItem,
  Typography,
  Modal,
  Box,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { Tag } from '@/types';

const tags: Tag[] = [
  { tag: 'accomodation', name: '숙박' },
  { tag: 'restaurant', name: '음식점' },
  { tag: 'theme_travel', name: '테마여행' },
  { tag: 'tourist', name: '관광지' },
  { tag: 'festival', name: '축제/행사' },
  { tag: 'shopping', name: '쇼핑' },
];

const PostCreatePage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [destName, setDestName] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [label, setLabel] = useState('');
  const [content, setContent] = useState('');
  const [number, setNumber] = useState<number | ''>('');
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [searchModalVisible, setSearchModalVisible] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  useEffect(() => {
    if (searchModalVisible) {
      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      const map = new window.kakao.maps.Map(mapContainer, mapOption);
      const ps = new window.kakao.maps.services.Places();

      ps.keywordSearch(destName, (data: any, status: any) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const bounds = new window.kakao.maps.LatLngBounds();
          data.forEach((place: any) => {
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: new window.kakao.maps.LatLng(place.y, place.x),
            });

            window.kakao.maps.event.addListener(marker, 'click', function () {
              const infowindow = new window.kakao.maps.InfoWindow({
                zIndex: 1,
                content: `<div style="padding:5px;font-size:12px;">${place.place_name}</div>`,
              });
              infowindow.open(map, marker);
            });

            bounds.extend(new window.kakao.maps.LatLng(place.y, place.x));
          });
          map.setBounds(bounds);
          setSearchResults(data);
        } else {
          setSearchResults([]);
        }
      });
    }
  }, [searchModalVisible, destName]);

  const handleSearchIconClick = () => {
    if (destName) {
      setSearchModalVisible(true);
    }
  };

  const handleSelectLocation = (place: any) => {
    setDestName(place.place_name);
    setLatitude(Number(place.y));
    setLongitude(Number(place.x));
    setSearchModalVisible(false);
  };

  const handleSubmit = () => {
    // Submit logic
    console.log({
      title,
      destName,
      date,
      label,
      content,
      number,
      latitude,
      longitude,
    });
  };

  return (
    <Container maxWidth="sm">
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
      <TextField
        label="위치 검색 (제주 내)"
        value={destName}
        onChange={(e) => setDestName(e.target.value)}
        fullWidth
        margin="normal"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearchIconClick} disabled={!destName}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        select
        label="라벨"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        fullWidth
        margin="normal"
      >
        {tags.map((tag) => (
          <MenuItem key={tag.tag} value={tag.tag}>
            {tag.name}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="글"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />
      <TextField
        label="인원"
        type="number"
        value={number}
        onChange={(e) =>
          setNumber(e.target.value === '' ? '' : Number(e.target.value))
        }
        fullWidth
        margin="normal"
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

      <Modal
        open={searchModalVisible}
        onClose={() => setSearchModalVisible(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 800,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            위치 검색
          </Typography>
          <div
            id="map"
            style={{ width: '100%', height: '400px', marginTop: '10px' }}
          ></div>
          <Box mt={2}>
            <List>
              {searchResults.map((item) => (
                <ListItem
                  button
                  onClick={() => handleSelectLocation(item)}
                  key={item.id}
                >
                  <ListItemText
                    primary={item.place_name}
                    secondary={item.address_name}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default PostCreatePage;
