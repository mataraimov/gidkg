import React, {useState} from 'react'

import { YMaps, Map, Placemark } from 'react-yandex-maps';

const MarkedYMap = () => {
  const [mark, setMark] = useState(null);

  // Обработчик события клика на карту
  function handleMapClick(e) {
    const coords = e.get('coords');
    setMark(coords);
    console.log(coords);
  }
  return (
    <YMaps query={{apikey: '4d02f53f-dd31-4ac9-8afc-5e7f3acfa620'}}>
        <div>
          <Map defaultState={{ center: [55.75, 37.57], zoom: 10 }}  style={{ width: '100%', height: '400px' }} onClick={handleMapClick}>
            {mark && (
              <Placemark
                geometry={mark}
                options={{ draggable: true }}
                modules={['geoObject.addon.balloon']}
                properties={{
                  balloonContentBody: `${mark}`
                }}
              />
            )}
          </Map>
        </div>
      </YMaps>
  )
}

export default MarkedYMap