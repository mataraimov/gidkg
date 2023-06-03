import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const YandexMap = () => {
  return (
    <YMaps>
      <Map defaultState={{ center: [55.751574, 37.573856], zoom: 10 }} style={{ width: '100%', height: '400px' }}>
        <Placemark geometry={[55.751574, 37.573856]} />
      </Map>
    </YMaps>
  );
};

export default YandexMap;