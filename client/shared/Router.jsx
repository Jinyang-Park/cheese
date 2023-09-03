import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './../pages/Main/Main';
import Reservation from './../pages/Reservation/Reservation';
import Menu from './../pages/Menu/Menu';
import Location from './../pages/Location/Location';
import Header from './../components/Layout/Header';
import Login from '../pages/Login/Login';
import Signup from './../pages/Signup/Signup';
import Date from '../pages/Date/Date';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/Reservation' element={<Reservation />}></Route>
        <Route path='/Reservation/date' element={<Date />}></Route>
        <Route path='/Menu' element={<Menu />}></Route>
        <Route path='/Location' element={<Location />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
