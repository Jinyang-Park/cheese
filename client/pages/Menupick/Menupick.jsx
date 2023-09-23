import React from 'react';
import CommonStyles from '../../utils/CommonStyles';
import styled from 'styled-components';
import { PiWarningCircleFill } from 'react-icons/pi';
import { CakeList } from '../../common/CakeList';

function Menupick() {
  return (
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
        <ReservationDateWrap>
          <ReservationMenuList>
            {CakeList.map((cake) => {
              return (
                <CakeLi>
                  <CakeDiv>
                    <CakeImg src={cake.image} />
                  </CakeDiv>
                  <Cakename>{cake.Koname}</Cakename>
                  <Cakeprice>{cake.price}</Cakeprice>
                </CakeLi>
              );
            })}
          </ReservationMenuList>
        </ReservationDateWrap>
      </ReservationInner>
    </CommonStyles>
  );
}

export default Menupick;
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
export const ReservationDateWrap = styled.div`
  padding-bottom: 100px;
  border: 3px solid #f1e4ab;
  border-width: 0 3px 3px 3px;
`;
export const ReservationDatediv = styled.div`
  width: 700px;
  /* float: left; */
  padding: 20px;
`;
export const ReservationSelect = styled.div`
  position: absolute;
  text-align: right;
  width: 48%;
  top: 550px;
  margin-bottom: 20px;
  display: inline-block;
`;
export const ReservationSelect2 = styled.div`
  position: absolute;
  text-align: right;
  width: 100%;
  top: 340px;
  margin-bottom: 20px;
  display: inline-block;
`;
export const ReservationUl = styled.ul`
  width: 90%;
  margin: 0 auto;
`;
export const ReservationLi = styled.li`
  display: inline-block;
  line-height: 20px;
`;
export const ReservationSelectBtn = styled.div`
  border-radius: 50px;
  background-color: #ffa0c5;
  width: 20px;
  height: 20px;
  margin: 0 10px 0 0;
  float: left;
`;
export const ReservationDisabledBtn = styled.div`
  border-radius: 50px;
  background-color: #ddd;
  width: 20px;
  height: 20px;
  margin: 0 10px 0 20px;
  float: left;
`;
export const ReservationTime = styled.div`
  /* width: calc(100% - 780px); */
  /* float: right; */
  padding: 20px 20px 30px 30px;
  margin-top: 10px;
`;
export const ReservationInfo = styled.div`
  position: absolute;
  top: 590px;
  padding-left: 20px;
  /* text-indent: -10px; */
  margin: 20px 0 30px;
`;
export const ReservationInfoH2 = styled.h2`
  padding-left: 8px;
  line-height: 30px;
  height: 30px;
  margin-bottom: 20px;
  font-weight: 400;
  text-indent: 0;
`;
export const ReservationInfoP = styled.p`
  margin-bottom: 5px;
  line-height: 1.6;
`;
export const PiWarningIcon = styled(PiWarningCircleFill)`
  font-size: 30px;
  color: #ffa0c5;
`;
export const ReservationFlex = styled.div`
  display: flex;
`;
export const ReservationBtnWrap = styled.div`
  text-align: center;
  margin: 50px auto 20px;
`;
export const ReservationBtn = styled.button`
  background: #ffdb7e;
  border: 1px solid #ffdb7e;
  color: #846e23;
  width: 100%;
  max-width: 240px;
  padding: 15px;
  margin: 3px 1px;
  border-radius: 500px;
  font-size: 1em;
`;
export const ReservationMenuList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  -moz-column-gap: 20px;
  column-gap: 20px;
  padding: 20px;
`;
export const CakeLi = styled.li`
  text-align: center;
  display: inline-grid;
  margin-bottom: 20px;
`;
export const CakeDiv = styled.div`
  background-color: #ccc;
  width: 100%;
  margin-bottom: 10px;
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  border-radius: 10px;
`;
export const CakeImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: auto;
  object-fit: contain;
`;
export const Cakename = styled.p`
  font-weight: 400;
  margin-bottom: 5px;
`;
export const Cakeprice = styled.p`
  font-weight: 100;
`;
