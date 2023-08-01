import React, { useEffect } from 'react';

export default function Map() {
  useEffect(() => {
    const { naver } = window;

    const mapOptions = {
      center: new naver.maps.LatLng(36.63674569999992, 127.46559329999975),
      zoom: 15,
    };

    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(36.6367457, 127.4655933),
      map: map,
    });

    const map = new naver.maps.Map('map', mapOptions, marker);
  }, []);

  return (
    <div
      id='map'
      className='map'
      style={{ width: '100%', height: '390px' }}
    ></div>
  );
}
