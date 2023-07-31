import React, { useEffect, useState } from 'react';
import GlobalStyle from './utils/globalStyles';
import Router from './shared/Router';

function App() {
  const [data, setData] = useState([]);
  console.log(data.dataArr);
  const Datafetch = async () => {
    const res = await fetch('http://localhost:5000/api');
    setData(res);
  };
  useEffect(() => {
    Datafetch();
  }, []);
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
