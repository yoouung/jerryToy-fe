import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const MapContainer = styled.div`
  width: 390px;
  height: 100%;
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

  return (
    <Container>
      <MapContainer id="map"></MapContainer>
    </Container>
  );
};

export default Map;
