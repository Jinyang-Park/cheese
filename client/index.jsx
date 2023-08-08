import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './style.css';
// const { REACT_APP_NAVER_CLIENT_ID } = process.env;

// console.log(REACT_APP_NAVER_CLIENT_ID)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
