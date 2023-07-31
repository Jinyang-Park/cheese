import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './../pages/Main/Main';
import Reservation from './../pages/Reservation/Reservation';
import Menu from './../pages/Menu/Menu';
import Location from './../pages/Location/Location';
import Header from './../components/Layout/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/Reservation' element={<Reservation />}></Route>
        <Route path='/Menu' element={<Menu />}></Route>
        <Route path='/Location' element={<Location />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
