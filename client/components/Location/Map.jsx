import React, { useEffect, useRef } from 'react';
import Cake from '../../public/assets/cake.png';
export default function Map() {
  useEffect(() => {
    const { naver } = window;

    // 지도의 위치, 위도 경도 파라미터로 넣어줌
    const location = new naver.maps.LatLng(
      36.63674569999992,
      127.46559329999975
    );

    const map = new naver.maps.Map('map', {
      center: location,
      zoom: 16,
      // 줌 컨트롤
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
    });
    // const content = [
    //   '<div>',
    //   `       <img src="../../public/assets/cake.png" width="85" height="85" alt="치즈본"/>`,
    //   '</div>',
    // ].join('');

    const markerOptions = {
      position: location,
      map: map,
      icon: {
        content:
          '<img src="https://img.icons8.com/?size=30&id=RdWZlLcQH7qw&format=png" alt="">',
        size: new naver.maps.Size(22, 35),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(11, 35),
      },
    };

    const maker = new naver.maps.Marker(markerOptions);
  }, []);

  return (
    <div
      id='map'
      className='map'
      style={{ width: '100%', height: '390px' }}
    ></div>
  );
}
