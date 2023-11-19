import styled from 'styled-components';
export const HeaderWrapper = styled.header`
  /* width: 100%; */
  height: 70px;
  padding: 10px 0px;
  /* display: flex; */
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  /* justify-content: space-between; */
  z-index: 1000;
  border-bottom: 1px solid #ddd;
  background: #fdfaf7;
`;

export const LogoSection = styled.div`
  float: left;
  font-size: 0;
  margin-right: 200px;
`;

export const LogoImg = styled.img`
  width: 130px;
  height: 40px;
  object-fit: contain;
  /* background: url(/img/logo.c3727278.png) 0 0 no-repeat; */
  background-size: 80px auto;
  display: inline-block;
  margin: 12px 0;
  /* margin-top: 12px;
  width: 70%; */
`;
export const Nav = styled.nav``;
export const HeaderPageSection = styled.ul`
  display: block;
  float: left;
  margin-right: 200px;
`;
export const Pageli = styled.li`
  display: inline-block;
  margin-right: 60px;
  line-height: 60px;
  font-weight: 500;
`;
export const PageliTxt = styled.a`
  font-size: 18px;
  line-height: 70px;
  font-weight: 500;
`;

export const HeaderLoginSection = styled.ul`
  float: right;
`;
export const Loginli = styled.li`
  display: inline-block;
  margin: 10px 15px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
`;
export const LoginImg = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
  margin-top: 8px;
  margin: 0 auto;
`;
export const LoginliTxt = styled.a`
  /* padding-top: 30px; */
  /* display: inline-block;
  line-height: 30px; */
`;
export const MypageliTxt = styled.a`
  /* padding-top: 30px;
  display: inline-block; */
  /* line-height: 30px; */
`;
export const CartliTxt = styled.a`
  /* padding-top: 30px;
  display: inline-block; */
  /* line-height: 30px; */
`;
export const CartWrap = styled.div``;
