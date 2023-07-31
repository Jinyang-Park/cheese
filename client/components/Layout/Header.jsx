import React from 'react';
import * as S from './Header.style';
import Logo from '../../public/assets/logo.png';
import Flower from '../../public/assets/flower.png';
import Leaf from '../../public/assets/leaf.png';
import Door from '../../public/assets/door.png';
import { Link } from 'react-router-dom';
import CommonStyles from '../../utils/CommonStyles';

export default function Header() {
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
              <S.Loginli>
                <S.LoginImg src={Flower} />
                <S.LoginliTxt>LOGIN</S.LoginliTxt>
              </S.Loginli>
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
