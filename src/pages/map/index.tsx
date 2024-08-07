import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import FloatTags from '../../components/floatTags';
import { tags } from '../../types';
import mockUpData from '../../mockupData/destinations.json';
import markerImg from '../../assets/markerImg.png';
import DrawerComponent from '../../components/drawer';

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

declare global {
  interface Window {
    kakao: any;
  }
}

const Map: React.FC = () => {
  const [map, setMap] = useState<any>(null);
  const [data, setData] = useState(mockUpData);
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

  const createMarkers = useCallback(() => {
    const newMarkers = data.map((item) => {
      const position = new kakao.maps.LatLng(item.latitude, item.longitude);
      const markerImage = new kakao.maps.MarkerImage(
        markerImg,
        new kakao.maps.Size(24, 35)
      );
      const marker = new kakao.maps.Marker({
        map: map,
        position: position,
        title: item.dest_name,
        image: markerImage,
        clickable: true,
      });

      kakao.maps.event.addListener(marker, 'click', () => {
        setIsClicked(true);
        setDestId(item.dest_id);
      });

      return marker;
    });

    setMarkers(newMarkers);
  }, [data, kakao.maps, map]);

  useEffect(() => {
    if (map && data.length > 0) {
      createMarkers();
    }
  }, [map, data.length, createMarkers]);

  useEffect(() => {
    fetch('../../mockupData/destinations.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData));
  }, []);

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
