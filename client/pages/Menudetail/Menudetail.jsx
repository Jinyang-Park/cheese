import React from 'react';
import { useLocation } from 'react-router-dom';
import CommonStyles from '../../utils/CommonStyles';
import styled from 'styled-components';

function Menudetail() {
  // usevaigater로 케익의 정보를 받아오는 로직
  const location = useLocation();
  const cake = location.state.cake;

  return (
    <>
      <CommonStyles>
        <ReservationWrap>
          <ReservationTitle>예약</ReservationTitle>
        </ReservationWrap>
        <ReservationInner>
          {/* 오더 탭 */}
          <ReservationTabUl>
            <ReservationStepLi>
              <ReservationA>일자선택</ReservationA>
            </ReservationStepLi>
            <ReservationStep2Li>
              <ReservationA>메뉴선택</ReservationA>
            </ReservationStep2Li>
          </ReservationTabUl>
          <CakedetailInner>
            {/*이미지 란 */}
            <CakedetailInform01>
              <CakedetailImgDiv>
                <CakedetailImg src={cake.image} />
              </CakedetailImgDiv>
            </CakedetailInform01>
            {/*케익이름, 영어이름, 가격 정보란 */}
            <CakedetailInform02>
              <CakedetailPrice>
                <CakedatailTitleLi>
                  <CakedetailH2>{cake.Koname}</CakedetailH2>
                  <CakedeatailLi>{cake.Enname}</CakedeatailLi>
                  <CakedeatailLi>{cake.price}원</CakedeatailLi>
                </CakedatailTitleLi>
              </CakedetailPrice>
              {/*케익 정보, 알레르기란 */}
              <CakedetailInformation>
                <CakedeatailLitxt>{cake.detail}</CakedeatailLitxt>
                <CakedetailAllergy>
                  <CakedetailAllergycause>
                    알레르기 유발 원인
                  </CakedetailAllergycause>
                  <CakedetailInput />
                  <CakedetailLable></CakedetailLable>
                </CakedetailAllergy>
              </CakedetailInformation>
            </CakedetailInform02>
          </CakedetailInner>
        </ReservationInner>
      </CommonStyles>
    </>
  );
}

export default Menudetail;

export const ReservationWrap = styled.div`
  position: relative;
`;
export const ReservationTitle = styled.h1`
  padding-top: 200px;
  margin: 0 0 100px;
  text-align: center;
  font-size: 1.75em;
  font-weight: 500;
  letter-spacing: 0;
`;
export const ReservationInner = styled.div`
  width: 1366px;
  margin: 0 auto;
  position: relative;
`;
export const ReservationTabUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  -moz-column-gap: 0;
  column-gap: 0;
`;
export const ReservationStepLi = styled.li`
  background-color: #000;
  border-bottom: 5px solid #f1e4ab;
  text-align: center;
  height: 44px;
  line-height: 44px;
  color: #fff;
  border-radius: 10px 0 0 0;
  &::before {
    content: 'STEP01';
    margin-right: 5px;
    font-weight: 300;
    font-size: 13px;
  }
`;
export const ReservationStep2Li = styled.li`
  border-radius: 0 10px 0 0;
  text-align: center;
  height: 44px;
  line-height: 44px;
  background-color: #f1e4ab;
  border-bottom: 5px solid #f1e4ab;
  color: #000;
  font-weight: 500;
  &::before {
    content: 'STEP02';
    margin-right: 5px;
    font-weight: 300;
    font-size: 13px;
  }
`;
export const ReservationA = styled.a``;
export const CakedetailInner = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 400px 1fr;
  -moz-column-gap: 40px;
  column-gap: 40px;
`;
export const CakedetailInform01 = styled.div``;
export const CakedetailImgDiv = styled.div`
  margin: 0 auto;
  width: 100%;
  position: relative;
  overflow: hidden;
`;
export const CakedetailImg = styled.img`
  width: 100%;
  height: auto;
`;
export const CakedetailInform02 = styled.div`
  padding: 15px 0 30px;
`;
export const CakedetailPrice = styled.ul`
  margin-bottom: 30px;
`;
export const CakedatailTitleLi = styled.li`
  line-height: 1.2;
`;
export const CakedetailH2 = styled.h2`
  font-size: 2.6rem;
  font-weight: 500;
`;
export const CakedeatailLi = styled.li`
  font-size: 1.2rem;
  margin-top: 8px;
  line-height: 1.2;
  &:nth-child(3) {
    font-size: 1.8rem;
    margin: 20px 0 0;
  }
`;
export const CakedetailInformation = styled.ul``;
export const CakedeatailLitxt = styled.li`
  margin-bottom: 20px;
`;
export const CakedetailAllergy = styled.li`
  position: relative;
  border-top: 1px solid #ebebeb;
  padding: 10px 0;
  line-height: 26px;
`;
export const CakedetailAllergycause = styled.h3`
  font-size: 18px;
  font-weight: 500;
  display: inline-block;
`;
export const CakedetailInput = styled.input``;
export const CakedetailLable = styled.label``;
