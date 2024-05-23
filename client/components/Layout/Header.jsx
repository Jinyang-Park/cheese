import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from '../../public/assets/Logo.png';
import Flower from '../../public/assets/Flower.png';
import Leaf from '../../public/assets/Leaf.png';
import Door from '../../public/assets/Door.png';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import CommonStyles from '../../utils/CommonStyles';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthContext';
import { PiListBold } from 'react-icons/pi';
import { RxCross2 } from 'react-icons/rx';

export default function Header() {
  const { type } = useParams();

  const { checkAuth, setCheckAuth } = useContext(AuthContext);
  // 반응형 토글
  const [isToggled, setIsToggled] = useState(false);
  // pathname 변경 시 토글 닫아주기
  const { pathname } = useLocation();

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  // 서버 응답 추가 코드문
  useEffect(() => {
    axios
      .get('http://localhost/header')
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
      .post('http://localhost/logout')
      .then((res) => {
        if (res.status === 200) {
          setCheckAuth(false);
          alert('로그아웃 되었습니다. 다시 만나요!');
          localStorage.clear();
          navigate('/');
          // 로그아웃 되면 토글 닫아주기
          setIsToggled(false);
        }
      })
      .catch((err) => console.log(err));
  };

  const CheckToLogin = () => {
    alert('로그인 후 서비스를 이용해 주세요');
    navigate('/Login');
    // Mypage나 Cart는 pathname이 바뀌면 토글 닫기
    setIsToggled(false);
  };

  // pathname이 바뀔때 마다 토클 닫아주기
  useEffect(() => {
    // 로고 클릭 시 토글 닫아주기
    if (pathname === '/') {
      setIsToggled(false);
    } else {
      setIsToggled(false);
    }
  }, [pathname]);

  return (
    <>
      <CommonStyles>
        <HeaderWrapper>
          <LogoSection>
            <Link to={'/'}>
              <LogoImg src={Logo} />
            </Link>
            {/*토클*/}
            {isToggled ? (
              <CancelIcon
                isToggled={isToggled}
                onClick={() => setIsToggled(!isToggled)}
              />
            ) : (
              <ToggleIcon
                isToggled={isToggled}
                onClick={() => setIsToggled(!isToggled)}
              />
            )}
          </LogoSection>

          <Nav isToggled={isToggled}>
            <HeaderPageSection isToggled={isToggled}>
              <Pageli>
                <Link to={'/Reservation'}>
                  <PageliTxt>RESERVATION</PageliTxt>
                </Link>
              </Pageli>
              <Pageli>
                <Link to={'/Menu'}>
                  <PageliTxt>MENU</PageliTxt>
                </Link>
              </Pageli>
              <Pageli>
                <Link to={'/Location'}>
                  <PageliTxt>LOCATION</PageliTxt>
                </Link>
              </Pageli>
            </HeaderPageSection>

            <HeaderLoginSection isToggled={isToggled}>
              {/*비 로그인 시 카트 클릭시 로그인 이동 */}
              {checkAuth ? (
                <Loginli onClick={handleDelete}>
                  <LoginImg src={Flower} />
                  <LoginliTxt>LOGOUT</LoginliTxt>
                </Loginli>
              ) : (
                <Loginli>
                  <Link to={'/Login'}>
                    <LoginImg src={Flower} />
                    <LoginliTxt>LOGIN</LoginliTxt>
                  </Link>
                </Loginli>
              )}
              {!checkAuth ? (
                <>
                  <Loginli onClick={CheckToLogin}>
                    <LoginImg src={Leaf} />
                    <MypageliTxt>MY PAGE</MypageliTxt>
                  </Loginli>
                  <Loginli onClick={CheckToLogin}>
                    <LoginImg src={Door} />
                    <CartliTxt>CART</CartliTxt>
                  </Loginli>
                </>
              ) : (
                <>
                  <Loginli onClick={() => navigate(`/Mypage`)}>
                    <LoginImg src={Leaf} />
                    <MypageliTxt>MY PAGE</MypageliTxt>
                  </Loginli>
                  <Loginli onClick={() => navigate(`/Cart/${type}`)}>
                    <LoginImg src={Door} />
                    <CartliTxt>CART</CartliTxt>
                  </Loginli>
                </>
              )}
            </HeaderLoginSection>
          </Nav>
        </HeaderWrapper>
      </CommonStyles>
    </>
  );
}

export const HeaderWrapper = styled.header`
  padding: 10px 10px;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  border-bottom: 1px solid #ddd;
  background: #fdfaf7;
  @media screen and (max-width: 1200px) {
    padding: 0px;
  }
  @media screen and (max-width: 600px) {
    padding: 0px;
  }
  @media screen and (max-width: 480px) {
    padding: 0px;
  }
`;

export const LogoSection = styled.div`
  float: left;
  font-size: 0;
  margin-right: 200px;
  @media screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
  }
  @media screen and (max-width: 1024px) {
    border-bottom: 1px solid #ddd;
  }
  @media screen and (max-width: 600px) {
    border-bottom: 1px solid #ddd;
  }
  @media screen and (max-width: 400px) {
    border-bottom: 1px solid #ddd;
  }
`;

export const LogoImg = styled.img`
  width: 130px;
  height: 40px;
  object-fit: contain;
  background-size: 80px auto;
  display: inline-block;
  margin: 12px 0;
  @media screen and (max-width: 1200px) {
    padding-left: 10px;
  }
  @media screen and (max-width: 600px) {
    padding-left: 10px;
  }
  @media screen and (max-width: 480px) {
    padding-left: 10px;
  }
`;
export const Nav = styled.nav`
  @media screen and (max-width: 1200px) {
    display: ${(props) => (props.isToggled ? 'flex' : 'none')};
    background-color: ${(props) => (props.isToggled ? '#fdfaf7' : 'none')};
    padding: ${(props) => (props.isToggled ? '10px 0px' : 'none')};
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative;
  }
`;
export const HeaderPageSection = styled.ul`
  display: block;
  float: left;
  margin-right: 200px;
  @media screen and (max-width: 1200px) {
    display: ${(props) => (props.isToggled ? 'flex' : 'none')};
    flex-direction: column;
    margin-right: 0px;
    align-items: center;
  }
`;
export const Pageli = styled.li`
  display: inline-block;
  margin-right: 60px;
  line-height: 60px;
  font-weight: 500;
  @media screen and (max-width: 1200px) {
    margin-right: 0px;
  }
`;
export const PageliTxt = styled.a`
  font-size: 18px;
  line-height: 70px;
  font-weight: 500;
  &:hover {
    color: #ffa0c5;
  }
`;

export const HeaderLoginSection = styled.ul`
  float: right;
  @media screen and (max-width: 1200px) {
    display: ${(props) => (props.isToggled ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
  }
`;
export const Loginli = styled.li`
  display: inline-block;
  margin: 10px 15px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    margin: 0px;
  }
`;
export const LoginImg = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
  margin-top: 8px;
  margin: 0 auto;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
export const LoginliTxt = styled.a`
  &:hover {
    color: #ffa0c5;
  }
  @media screen and (max-width: 1200px) {
    font-size: 18px;
    line-height: 70px;
    font-weight: 500;
  }
`;
export const MypageliTxt = styled.a`
  &:hover {
    color: #ffa0c5;
  }
  @media screen and (max-width: 1200px) {
    font-size: 18px;
    line-height: 70px;
    font-weight: 500;
  }
`;
export const CartliTxt = styled.a`
  &:hover {
    color: #ffa0c5;
  }
  @media screen and (max-width: 1200px) {
    font-size: 18px;
    line-height: 70px;
    font-weight: 500;
  }
`;
export const CartWrap = styled.div``;
export const ToggleIcon = styled(PiListBold)`
  cursor: pointer;
  display: none;
  width: 40px;
  height: 40px;
  margin: 0px 12px;
  @media screen and (max-width: 1200px) {
    display: ${(props) => (props.isToggled ? 'none' : 'block')};
    padding-right: 10px;
  }
  @media screen and (max-width: 600px) {
    padding-right: 10px;
  }
  @media screen and (max-width: 480px) {
    padding-right: 10px;
  }
`;
export const CancelIcon = styled(RxCross2)`
  cursor: pointer;
  display: none;
  width: 40px;
  height: 40px;
  margin: 0px 12px;
  @media screen and (max-width: 1200px) {
    display: ${(props) => (props.isToggled ? 'block' : 'none')};
    padding-right: 10px;
  }
  @media screen and (max-width: 600px) {
    padding-right: 10px;
  }
  @media screen and (max-width: 480px) {
    padding-right: 10px;
  }
`;
