import React, { useEffect, useState } from 'react';
import * as S from './Header.style';
import Logo from '../../public/assets/logo.png';
import Flower from '../../public/assets/flower.png';
import Leaf from '../../public/assets/leaf.png';
import Door from '../../public/assets/door.png';
import { Link, useNavigate } from 'react-router-dom';
import CommonStyles from '../../utils/CommonStyles';
import axios from 'axios';

export default function Header() {
  const [checkAuth, setCheckAuth] = useState(false);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get('http://localhost:5000/header')
      .then((res) => {
        const message = res.data.message || '';
        if (message.includes('success')) {
          setCheckAuth(true);
        } else {
          setCheckAuth(false);
        }
      })
      .catch((err) => console.log(err));
  }, [navigate]);

  const handleDelete = () => {
    axios
      .post('http://localhost:5000/logout') // 변경된 부분
      .then((res) => {
        // location.reload();
        setCheckAuth(false);
        alert('로그아웃 되었습니다. 다시 만나요!');
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <S.HeaderWrapper>
        <CommonStyles>
          <S.LogoSection>
            <Link to={'/'}>
              <S.LogoImg src={Logo} />
            </Link>
          </S.LogoSection>

          <S.Nav>
            <S.HeaderPageSection>
              <S.Pageli>
                <Link to={'/Reservation'}>
                  <S.PageliTxt>RESERVATION</S.PageliTxt>
                </Link>
              </S.Pageli>
              <S.Pageli>
                <Link to={'/Menu'}>
                  <S.PageliTxt>MENU</S.PageliTxt>
                </Link>
              </S.Pageli>
              <S.Pageli>
                <Link to={'/Location'}>
                  <S.PageliTxt>LOCATION</S.PageliTxt>
                </Link>
              </S.Pageli>
            </S.HeaderPageSection>

            <S.HeaderLoginSection>
              {checkAuth ? (
                <S.Loginli onClick={handleDelete}>
                  <S.LoginImg src={Flower} />
                  <S.LoginliTxt>LOGOUT</S.LoginliTxt>
                </S.Loginli>
              ) : (
                <S.Loginli>
                  <Link to={'/Login'}>
                    <S.LoginImg src={Flower} />
                    <S.LoginliTxt>LOGIN</S.LoginliTxt>
                  </Link>
                </S.Loginli>
              )}
              {/* 로그인 시 */}
              {/* {checkAuth && (
                <S.Loginli>
                  <S.LoginImg src={Flower} />
                  <S.LoginliTxt onClick={handleDelete(true)}>
                    LOGOUT
                  </S.LoginliTxt>
                </S.Loginli>
              )} */}

              {/* 비 로그인 시 */}
              {/* {!checkAuth && (
                <S.Loginli>
                  <Link to={'/Login'}>
                    <S.LoginImg src={Flower} />
                    <S.LoginliTxt>LOGIN</S.LoginliTxt>
                  </Link>
                </S.Loginli>
              )} */}

              <S.Loginli>
                <S.LoginImg src={Leaf} />
                <S.MypageliTxt>MY PAGE</S.MypageliTxt>
              </S.Loginli>
              <S.Loginli>
                <S.LoginImg src={Door} />
                <S.CartliTxt>CART</S.CartliTxt>
              </S.Loginli>
            </S.HeaderLoginSection>
          </S.Nav>
        </CommonStyles>
      </S.HeaderWrapper>
    </>
  );
}
