import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const YandexMap = ({coord = [55.75, 37.57]}) => {
  return (
    <YMaps>
      <Map defaultState={{ center: coord, zoom: 10 }} style={{ width: '100%', height: '250px' }}>
        <Placemark geometry={coord} />
      </Map>
    </YMaps>
  );
};

export default YandexMap;