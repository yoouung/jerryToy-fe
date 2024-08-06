import DrawerComponent from '../components/drawer';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 390px;
  height: 100vh;
`;

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

const Map = () => {
  const [map, setMap] = useState(null);
  const { kakao } = window;

  useEffect(() => {
    const mapContainer = document.getElementById('map'); // 지도를 표시할 div
    const mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 10, // 지도의 확대 레벨
    };

    setMap(new kakao.maps.Map(mapContainer, mapOption));
  }, []);

  // TODO: drawer-list 위치 수정

  return (
    <Container>
      <MapContainer id="map" />
      <DrawerWrapper>
        <DrawerComponent />
      </DrawerWrapper>
    </Container>
  );
};

export default Map;
