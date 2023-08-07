import React, { useEffect } from 'react';
import styled from 'styled-components';

export default function Map({ post }) {
  useEffect(() => {
    const { naver } = window;

    // 지도의 위치, 위도 경도
    const location = new naver.maps.LatLng(
      36.63674569999992,
      127.46559329999975
    );

    const map = new naver.maps.Map('map', {
      center: location,
      zoom: 18,
      // 줌 컨트롤
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
    });

    // 이미지 마커 생성
    const markerOptions = {
      position: location,
      map: map,

      icon: {
        content: [
          '<div class="markerContainer" style="display: flex; padding:5px 19px 5px 30px; border-radius:23px; border: 2px solid #000000;     align-items: center; background: #fff;">',
          '<div class="makercircle" style="display:table; margin-left: -20px; padding:7px; border-radius:15px;  background: #000000;">',
          '<img src="https://img.icons8.com/?size=15&id=QqI85B8zokhd&format=png" style="filter: invert(100%) sepia(96%) saturate(1%) hue-rotate(9deg) brightness(104%) contrast(100%);"/>',
          // postTitle,
          '</div>',
          '<h3 style="margin-left: 10px">치즈본</h3>',
          '</div>',
        ].join(''),
        size: new naver.maps.Size(38, 58),
        anchor: new naver.maps.Point(50, 58),
      },
    };

    // 마커 클릭 시 치즈본 지도 맵으로 이동
    const makerClickHandler = function (e) {
      const url =
        'https://map.naver.com/v5/search/%EC%B9%98%EC%A6%88%EB%B3%B8/place/1573099360?entry=plt&c=15.67,0,0,3,dh&isCorrectAnswer=true';

      window.open(url);
    };

    // marker에 markerOptions을 넣어줌
    const maker = new naver.maps.Marker(markerOptions);

    // 마커 클릭시 markerOptions과 마커이벤트핸들러 작동
    const Linkurl = new naver.maps.Event.addListener(
      maker,
      'click',
      makerClickHandler
    );
  }, []);

  return (
    <div
      id='map'
      className='map'
      style={{ width: '100%', height: '390px' }}
    ></div>
  );
}
