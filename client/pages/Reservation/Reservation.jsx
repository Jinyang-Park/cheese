import React from 'react';
import { useNavigate } from 'react-router-dom';
import checkLogin from './../../hooks/checkLogin';

function Reservation() {
  const result = checkLogin();
  const navigate = useNavigate();
  if (result.loggedIn) {
    console.log(result.name);
  } else {
    navigate('/Login');
    console.log('Not logged in');
  }

  return <div>가보자규</div>;
}

export default Reservation;
