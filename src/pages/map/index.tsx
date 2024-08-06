import { useState, useEffect } from 'react';
import styled from 'styled-components';
import FloatTags from '@/components/floatTags';
import { tags } from '@/types';

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const DrawerWrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 1000;
`;

declare global {
  interface Window {
    kakao: any;
  }
}

const Map: React.FC = () => {
  const [map, setMap] = useState(null);
  const [data, setData] = useState([
    {
      dest_name: '한라산',
      tag: ['등산', '산'],
      latitude: 33.3617,
      logitude: 126.5292,
    },
    {
      dest_name: '성산일출봉',
      tag: ['일출', '일몰'],
      latitude: 33.4581,
      logitude: 126.9425,
    },
    {
      dest_name: '광치기해변',
      tag: ['일출'],
      latitude: 33.4527,
      logitude: 126.9241,
    },
    {
      dest_name: '제주공항',
      tag: ['비행기', '공항'],
      latitude: 33.5068,
      logitude: 126.4934,
    },
  ]);
  const [markers, setMarkers] = useState([]);
  const { kakao } = window;

  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    const mapContainer = document.getElementById('map'); // 지도를 표시할 div
    const mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 10, // 지도의 확대 레벨
    };

    setMap(new kakao.maps.Map(mapContainer, mapOption));
  }, [kakao.maps.LatLng, kakao.maps.Map]);

  // const updateMarkers = () => {
  //   if (markers) {
  //     markers.forEach((marker) => marker.setMap(null));
  //     setMarkers([]);
  //   }

  //   // 새로운 마커 추가
  //   data.forEach((item) => {
  //     const position = new kakao.maps.LatLng(item.latitude, item.longitude);
  //     const imageSize = new kakao.maps.Size(24, 35);
  //     const markerImage = new kakao.maps.MarkerImage(sampleImg, imageSize);

  //     const marker = new kakao.maps.Marker({
  //       map: map,
  //       position: position,
  //       title: item.description,
  //       image: markerImage,
  //     });

  //     setMarkers((prev) => [...prev, marker]);
  //   });
  // };

  // TODO: drawer-list 위치 수정

  return (
    <>
      <MapContainer id="map" />
      <FloatTags tagList={tags} />
    </>
  );
};

export default Map;
