import React, { useEffect, useState } from 'react';
import GlobalStyle from './utils/globalStyles';
import Router from './shared/Router';
import axios from 'axios';

function App() {
  // const [data, setData] = useState(null);

  // const requestOptions = {
  //   method: 'GET',
  //   Headers: { 'Content-Type': 'application/json' },
  //   redirect: 'follow',
  // };
  // fetch('http://localhost:5000/api', requestOptions)
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));

  // useEffect(() => {
  //   // async/await 사용하여 데이터 가져 오기
  //   const fetchData = async () => {
  //     const response = await fetch('http://localhost:5000/api');
  //     const data = await response.json();
  //     setData(data);
  //   };
  //   fetchData();
  // }, []);

  // console.log(data); // 데이터 확인
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
