import React, { useEffect } from 'react';
import styled from 'styled-components';

export default function Map({ post }) {
  console.log(post);
  useEffect(() => {
    const { naver } = window;

    // 지도의 위치, 위도 경도 파라미터로 넣어줌
    const location = new naver.maps.LatLng(
      36.63674569999992,
      127.46559329999975
    );

    const setloacation = new naver.maps.LatLng();
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

    var infowindow = new naver.maps.InfoWindow();
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

    naver.maps.Event.addListener(markerOptions, 'click', function (e) {
      url =
        'https://map.naver.com/v5/search/%EC%B9%98%EC%A6%88%EB%B3%B8/place/1573099360?entry=plt&c=15.67,0,0,3,dh&isCorrectAnswer=true';

      infowindow.open(url);
    });
    // naver.maps.Event.addListener(map, 'click', function (e) {
    //   map.setPosition(e.coord);
    // });
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
// https://map.naver.com/v5/search/%EC%B9%98%EC%A6%88%EB%B3%B8/place/1573099360?entry=plt&c=15.67,0,0,3,dh&isCorrectAnswer=true
