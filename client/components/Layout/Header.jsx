import React, { useContext, useEffect, useState } from 'react';
import * as S from './Header.style';
import Logo from '../../public/assets/logo.png';
import Flower from '../../public/assets/flower.png';
import Leaf from '../../public/assets/leaf.png';
import Door from '../../public/assets/door.png';
import { Link, useNavigate } from 'react-router-dom';
import CommonStyles from '../../utils/CommonStyles';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthContext';

export default function Header() {
  const { checkAuth, setCheckAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  // 서버 응답 추가 코드문
  useEffect(() => {
    axios
      .get('http://localhost:5000/header')
      .then((res) => {
        if (res.status === 200) {
          setCheckAuth(true);
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          setCheckAuth(false);
        }
      });
  }, [navigate]);

  const handleDelete = () => {
    axios
      .post('http://localhost:5000/logout')
      .then((res) => {
        if (res.status === 200) {
          setCheckAuth(false);
          alert('로그아웃 되었습니다. 다시 만나요!');
          localStorage.clear();
          navigate('/');
        }
      })
      .catch((err) => console.log(err));
  };

  const CheckToLogin = () => {
    alert('로그인 후 서비스를 이용해 주세요');
    navigate('/Login');
  };
  // 서버 응답 코드 추가하지 않은 코드문
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:5000/header')
  //     .then((res) => {
  //       const message = res.data.message || '';
  //       if (message.includes('success')) {
  //         setCheckAuth(true);
  //       } else {
  //         setCheckAuth(false);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, [navigate]);

  // const handleDelete = () => {
  //   axios
  //     .post('http://localhost:5000/logout') // 변경된 부분
  //     .then((res) => {
  //       // location.reload();
  //       setCheckAuth(false);
  //       alert('로그아웃 되었습니다. 다시 만나요!');
  //       navigate('/');
  //     })
  //     .catch((err) => console.log(err));
  // };

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
              {/*비 로그인 시 카트 클릭시 로그인 이동 */}
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
              {!checkAuth ? (
                <>
                  <S.Loginli onClick={CheckToLogin}>
                    <S.LoginImg src={Leaf} />
                    <S.MypageliTxt>MY PAGE</S.MypageliTxt>
                  </S.Loginli>
                  <S.Loginli onClick={CheckToLogin}>
                    <S.LoginImg src={Door} />
                    <S.CartliTxt>CART</S.CartliTxt>
                  </S.Loginli>
                </>
              ) : (
                <>
                  <S.Loginli onClick={() => navigate(`/Mypage`)}>
                    <S.LoginImg src={Leaf} />
                    <S.MypageliTxt>MY PAGE</S.MypageliTxt>
                  </S.Loginli>
                  <S.Loginli onClick={() => navigate(`/Cart`)}>
                    <S.LoginImg src={Door} />
                    <S.CartliTxt>CART</S.CartliTxt>
                  </S.Loginli>
                </>
              )}
              {/* {!checkAuth ? (
              ) : (
              )} */}
            </S.HeaderLoginSection>
          </S.Nav>
        </CommonStyles>
      </S.HeaderWrapper>
    </>
  );
}
