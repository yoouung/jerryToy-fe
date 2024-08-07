import { useState, useEffect } from 'react';
import styled from 'styled-components';
import FloatTags from '../../components/floatTags';
import { tags } from '../../types';
import axios from 'axios';
import markerImg from '../../assets/markerImg.png';
import DrawerComponent from '@/components/drawer';

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

declare global {
  interface Window {
    kakao: any;
  }
}

const initialData = [
  {
    postId: 1,
    user: {
      userId: 1,
      nickname: 'John',
      age: 25,
      mbti: 'INTJ',
      gender: 'M',
      regDate: '2022-01-01',
      recent_match: '2023-01-01',
      count: 10,
      degree: 0.0,
    },
    dest: {
      destId: 1,
      destName: '한라산',
      label: '관광지',
      address: '제주특별자치도 서귀포시',
      roadaddress: '제주특별자치도 서귀포시 1100로',
      introduction: '높은 산',
      latitude: 33.3617,
      longitude: 126.5292,
      tagList: ['등산', '산'],
    },
    title: '한라산 등산',
    content: '한라산에 등산 가요',
    postDate: '2022-01-01',
    tag: '등산',
    likes: 100,
    views: 200,
    people: 5,
  },
  {
    postId: 2,
    user: {
      userId: 2,
      nickname: 'Doe',
      age: 30,
      mbti: 'ENFP',
      gender: 'F',
      regDate: '2022-01-01',
      recent_match: '2023-01-01',
      count: 20,
      degree: 0.0,
    },
    dest: {
      destId: 2,
      destName: '성산일출봉',
      label: '쇼핑',
      address: '제주특별자치도 서귀포시 성산읍',
      roadaddress: '제주특별자치도 서귀포시 성산읍 일출로',
      introduction: '아름다운 일출',
      latitude: 33.4581,
      longitude: 126.9425,
      tagList: ['일출', '산'],
    },
    title: '성산일출봉에서 일출 보기',
    content: '성산일출봉에서 일출을 봅시다',
    postDate: '2022-01-02',
    tag: '일출',
    likes: 200,
    views: 300,
    people: 10,
  },
  // ... more posts
];

const Map: React.FC = () => {
  const [map, setMap] = useState<any>(null);
  const [data, setData] = useState(initialData);
  const [markers, setMarkers] = useState<any[]>([]);
  const [isClicked, setIsClicked] = useState(false);
  const [destId, setDestId] = useState<number | undefined>(undefined);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { kakao } = window;

  useEffect(() => {
    const mapContainer = document.getElementById('map');
    const mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 10,
    };
    setMap(new kakao.maps.Map(mapContainer, mapOption));
  }, [kakao.maps.LatLng, kakao.maps.Map]);

  useEffect(() => {
    if (map && data.length > 0) {
      createMarkers();
    }
  }, [map]);

  const onClose = () => {
    setDrawerOpen(false);
    setIsClicked(false);
  };

  const createMarkers = () => {
    const newMarkers = data.map((item) => {
      const position = new kakao.maps.LatLng(
        item.dest.latitude,
        item.dest.longitude
      );
      const markerImage = new kakao.maps.MarkerImage(
        markerImg,
        new kakao.maps.Size(24, 35)
      );
      const marker = new kakao.maps.Marker({
        map: map,
        position: position,
        title: item.dest.destName,
        image: markerImage,
        clickable: true,
      });

      kakao.maps.event.addListener(marker, 'click', () => {
        setIsClicked(true);
        setDestId(item.dest.destId);
      });

      return marker;
    });

    setMarkers(newMarkers);
  };

  const handleCloseDrawer = () => {
    setIsClicked(false);
  };

  return (
    <>
      <MapContainer id="map" />
      <FloatTags tagList={tags} data={data} />
      <DrawerComponent
        tagList={tags}
        destId={destId}
        isClicked={isClicked}
        data={data}
        onClose={handleCloseDrawer}
      />
    </>
  );
};

export default Map;
