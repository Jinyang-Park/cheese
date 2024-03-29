import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './../pages/Main/Main';
import Reservation from './../pages/Reservation/Reservation';
import Menu from './../pages/Menu/Menu';
import Location from './../pages/Location/Location';
import Header from './../components/Layout/Header';
import Login from '../pages/Login/Login';
import Signup from './../pages/Signup/Signup';
import ReservationDate from './../pages/ReservationDate/ReservationDate';
import Menupick from './../pages/Menupick/Menupick';
import Menudetail from '../pages/Menudetail/Menudetail';
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart';
import Mypage from '../pages/Mypage/Mypage';
import MenuInformationDetail from '../pages/MenuInformationDetail/MenuInformationDetail';
import Footer from '../components/Layout/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/Reservation' element={<Reservation />}></Route>
        <Route
          path='/Reservation/date/:type'
          element={<ReservationDate />}
        ></Route>
        <Route
          path='/Reservation/date/:type/menupick'
          element={<Menupick />}
        ></Route>
        <Route
          path='/Reservation/date/:type/menupick/menudetail'
          element={<Menudetail />}
        ></Route>
        <Route path='/Cart/:type' element={<ShoppingCart />}></Route>
        <Route path='/Mypage' element={<Mypage />}></Route>
        <Route path='/Menu' element={<Menu />}></Route>
        <Route
          path='/Menu/menuinformationdetail'
          element={<MenuInformationDetail />}
        ></Route>
        <Route path='/Location' element={<Location />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
